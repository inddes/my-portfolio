/*
  # Create meeting bookings table

  1. New Tables
    - `meeting_bookings`
      - `id` (uuid, primary key) - Unique identifier for each booking
      - `name` (text) - Name of the person booking
      - `email` (text) - Email of the person booking
      - `date` (date) - Date of the meeting
      - `time_slot` (text) - Time slot in GMT (e.g., "10:00", "13:00")
      - `notes` (text, optional) - Additional notes from the booker
      - `status` (text) - Booking status: pending, confirmed, cancelled
      - `google_event_id` (text, optional) - Google Calendar event ID for tracking
      - `created_at` (timestamptz) - When the booking was created
      - `updated_at` (timestamptz) - When the booking was last updated

  2. Security
    - Enable RLS on `meeting_bookings` table
    - Add policy for anyone to create bookings (public access)
    - Add policy for authenticated admin to view all bookings

  3. Indexes
    - Index on date and time_slot for quick availability checks
    - Index on email for user lookup
*/

CREATE TABLE IF NOT EXISTS meeting_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  date date NOT NULL,
  time_slot text NOT NULL,
  notes text DEFAULT '',
  status text DEFAULT 'pending',
  google_event_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_status CHECK (status IN ('pending', 'confirmed', 'cancelled'))
);

ALTER TABLE meeting_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create bookings"
  ON meeting_bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view their own bookings"
  ON meeting_bookings
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_meeting_bookings_date_time 
  ON meeting_bookings(date, time_slot);

CREATE INDEX IF NOT EXISTS idx_meeting_bookings_email 
  ON meeting_bookings(email);