import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://eyepipihjevcnccdmxha.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5ZXBpcGloamV2Y25jY2RteGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3NTY5NjQsImV4cCI6MTk5NDMzMjk2NH0.XPXWbhHbrD7v4JmHV8mlAivBsbnPCyxFEIRjplpY4Wg'

export const supabase = createClient(supabaseUrl, supabaseKey)