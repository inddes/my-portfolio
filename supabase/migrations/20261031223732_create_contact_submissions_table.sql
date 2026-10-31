/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `name` (text, not null) - Sender's name
  - `email` (text, not null) - Sender's email address
  - `subject` (text, not null) - Message subject
  - `message` (text, not null) - Message body
  - `created_at` (timestamptz, default now()) - When the submission was created

2. Security
- Enable RLS on `contact_submissions`.
- Grant INSERT to `anon, authenticated` so the public contact form can submit.
- Grant SELECT to `service_role` only (for admin retrieval via edge functions).
- No public SELECT/UPDATE/DELETE — visitors can only submit, not read or modify.

3. Important Notes
- This is a no-auth (public) contact form, so INSERT is allowed for anon.
- Visitors cannot read other submissions (no SELECT policy for anon/authenticated).
- Only the service_role (used server-side in edge functions) can read submissions.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_submissions TO anon, authenticated;
GRANT SELECT ON contact_submissions TO service_role;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);