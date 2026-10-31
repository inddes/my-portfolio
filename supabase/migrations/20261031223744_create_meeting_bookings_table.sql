/*
# Create meeting_bookings table

1. New Tables
- `meeting_bookings`
  - `id` (uuid, primary key) - Unique identifier for each booking
  - `name` (text, not null) - Name of the person booking
  - `email` (text, not null) - Email of the person booking
  - `date` (date, not null) - Date of the meeting
  - `time_slot` (text, not null) - Time slot in GMT (e.g., "10:00", "13:00")
  - `notes` (text, default '') - Additional notes from the booker
  - `status` (text, default 'pending') - Booking status: pending, confirmed, cancelled
  - `google_event_id` (text, nullable) - Calendar event ID for tracking
  - `created_at` (timestamptz, default now()) - When the booking was created
  - `updated_at` (timestamptz, default now()) - When the booking was last updated

2. Security
- Enable RLS on `meeting_bookings`.
- Grant SELECT, INSERT to `anon, authenticated` so the public booking form can read available slots and create bookings.
- Grant UPDATE to `service_role` only (edge function updates status to confirmed).
- No public UPDATE/DELETE — visitors cannot modify or delete bookings.

3. Important Notes
- This is a no-auth (public) booking form, so SELECT and INSERT are allowed for anon.
- The edge function uses the service_role key to update booking status to confirmed.
- A unique constraint on (date, time_slot) prevents double-booking of the same slot.
*/

CREATE TABLE IF NOT EXISTS meeting_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  date date NOT NULL,
  time_slot text NOT NULL,
  notes text DEFAULT '',
  status text NOT NULL DEFAULT 'pending',
  google_event_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_status CHECK (status IN ('pending', 'confirmed', 'cancelled'))
);

ALTER TABLE meeting_bookings ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT ON meeting_bookings TO anon, authenticated;
GRANT UPDATE ON meeting_bookings TO service_role;

DROP POLICY IF EXISTS "anon_select_meeting_bookings" ON meeting_bookings;
CREATE POLICY "anon_select_meeting_bookings"
  ON meeting_bookings
  FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "anon_insert_meeting_bookings" ON meeting_bookings;
CREATE POLICY "anon_insert_meeting_bookings"
  ON meeting_bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE UNIQUE INDEX IF NOT EXISTS idx_meeting_bookings_date_time_unique
  ON meeting_bookings(date, time_slot)
  WHERE status IN ('pending', 'confirmed');

CREATE INDEX IF NOT EXISTS idx_meeting_bookings_email
  ON meeting_bookings(email);