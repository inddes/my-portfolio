import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface BookingRequest {
  bookingId: string;
  name: string;
  email: string;
  date: string;
  timeSlot: string;
  notes: string;
}

function generateICS(booking: BookingRequest): string {
  const { name, email, date, timeSlot, notes } = booking;
  const [hours, minutes] = timeSlot.split(':');

  const startDateTime = new Date(`${date}T${hours}:${minutes}:00Z`);
  const endDateTime = new Date(startDateTime);
  endDateTime.setMinutes(endDateTime.getMinutes() + 30);

  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Meeting Booking System//EN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:${booking.bookingId}@meetingbooking.com`,
    `DTSTAMP:${formatDate(new Date())}`,
    `DTSTART:${formatDate(startDateTime)}`,
    `DTEND:${formatDate(endDateTime)}`,
    `SUMMARY:Meeting with ${name}`,
    `DESCRIPTION:${notes || 'No additional notes'}`,
    `ORGANIZER;CN=Indrani Deshmukh:mailto:indrani.belchandan@gmail.com`,
    `ATTENDEE;CN=${name};RSVP=TRUE:mailto:${email}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  return icsContent;
}

async function sendCalendarInvite(booking: BookingRequest, icsContent: string) {
  const emailBody = `
Hello ${booking.name},

Your meeting has been confirmed!

Date: ${booking.date}
Time: ${booking.timeSlot} GMT (30 minutes)
${booking.notes ? `Notes: ${booking.notes}` : ''}

A calendar invitation is attached to this email. Please accept it to add the meeting to your calendar.

Looking forward to speaking with you!

Best regards,
Indrani Deshmukh
  `.trim();

  console.log('Calendar Invitation Generated:');
  console.log('To:', booking.email);
  console.log('CC:', 'indrani.belchandan@gmail.com');
  console.log('Subject:', `Meeting Confirmed - ${booking.date} at ${booking.timeSlot} GMT`);
  console.log('ICS Content:', icsContent);

  return true;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const booking: BookingRequest = await req.json();

    const icsContent = generateICS(booking);

    await sendCalendarInvite(booking, icsContent);

    const { error: updateError } = await supabase
      .from("meeting_bookings")
      .update({
        status: "confirmed",
        updated_at: new Date().toISOString()
      })
      .eq("id", booking.bookingId);

    if (updateError) {
      throw updateError;
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Meeting booked successfully",
        icsContent: icsContent
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error booking meeting:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
