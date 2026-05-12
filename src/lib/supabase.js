import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tzjzzlogpeeaurjbvmwu.supabase.co";
const supabaseKey = "sb_publishable_0jTIhwgQhDsvy72woZiZPA_khvjVjOM";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);