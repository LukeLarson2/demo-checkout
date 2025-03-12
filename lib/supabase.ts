import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vnrkzbvljfsixpayfoxk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZucmt6YnZsamZzaXhwYXlmb3hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3ODc3OTYsImV4cCI6MjA1NzM2Mzc5Nn0.JbHthBhZnoSvN1DS-urNl5_SWfDj0GOxl37PI0QpfXM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);