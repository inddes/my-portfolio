import { useState, useEffect } from 'react';
import { Calendar, Clock, Check, Loader2 } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const TIME_SLOTS = [
  '10:00',
  '10:30',
  '13:00',
  '13:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
];

interface BookingFormData {
  name: string;
  email: string;
  date: string;
  timeSlot: string;
  notes: string;
}

export function MeetingBooking() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set());
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    date: '',
    timeSlot: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateString = minDate.toISOString().split('T')[0];

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 60);
  const maxDateString = maxDate.toISOString().split('T')[0];

  useEffect(() => {
    if (selectedDate) {
      fetchBookedSlots(selectedDate);
    }
  }, [selectedDate]);

  const fetchBookedSlots = async (date: string) => {
    const { data, error } = await supabase
      .from('meeting_bookings')
      .select('time_slot')
      .eq('date', date)
      .in('status', ['pending', 'confirmed']);

    if (error) {
      console.error('Error fetching booked slots:', error);
      return;
    }

    const slots = new Set(data.map((booking) => booking.time_slot));
    setBookedSlots(slots);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setSelectedDate(date);
    setSelectedTime('');
    setFormData({ ...formData, date, timeSlot: '' });
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setFormData({ ...formData, timeSlot: time });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!formData.name || !formData.email || !formData.date || !formData.timeSlot) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      const { data: booking, error: dbError } = await supabase
        .from('meeting_bookings')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            date: formData.date,
            time_slot: formData.timeSlot,
            notes: formData.notes,
            status: 'pending',
          },
        ])
        .select()
        .single();

      if (dbError) throw dbError;

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/book-meeting`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            bookingId: booking.id,
            name: formData.name,
            email: formData.email,
            date: formData.date,
            timeSlot: formData.timeSlot,
            notes: formData.notes,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to create calendar event');
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        date: '',
        timeSlot: '',
        notes: '',
      });
      setSelectedDate('');
      setSelectedTime('');

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error('Error booking meeting:', err);
      setError('Failed to book meeting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTimeSlot = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    return `${hour}:${minutes} GMT`;
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-2">
        <Calendar className="text-blue-600 dark:text-blue-400" size={28} />
        Book a Meeting
      </h3>

      {isSuccess ? (
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-500 dark:border-emerald-400 rounded-lg p-6 text-center">
          <Check className="w-16 h-16 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
          <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">
            Meeting Booked Successfully!
          </h4>
          <p className="text-emerald-700 dark:text-emerald-300">
            You'll receive a calendar invitation at your email shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none text-slate-900 dark:text-slate-100"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none text-slate-900 dark:text-slate-100"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Select Date *
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              min={minDateString}
              max={maxDateString}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none text-slate-900 dark:text-slate-100"
              required
            />
          </div>

          {selectedDate && (
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                <Clock size={18} />
                Available Time Slots (GMT) *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {TIME_SLOTS.map((time) => {
                  const isBooked = bookedSlots.has(time);
                  const isSelected = selectedTime === time;

                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => !isBooked && handleTimeSelect(time)}
                      disabled={isBooked}
                      className={`px-4 py-3 rounded-lg font-medium transition-all ${
                        isSelected
                          ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg scale-105'
                          : isBooked
                          ? 'bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed'
                          : 'bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-blue-500 dark:hover:border-blue-400'
                      }`}
                    >
                      {formatTimeSlot(time)}
                      {isBooked && (
                        <span className="block text-xs mt-1">Booked</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none text-slate-900 dark:text-slate-100 resize-none"
              rows={4}
              placeholder="Any specific topics you'd like to discuss?"
            />
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !formData.date || !formData.timeSlot}
            className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Booking...
              </>
            ) : (
              'Confirm Booking'
            )}
          </button>
        </form>
      )}
    </div>
  );
}
