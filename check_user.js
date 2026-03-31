const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://wnkidtnpqqfigsotcyra.supabase.co";
const supabaseKey = "sb_publishable_n-sCnHcb6OuXrHmRX8-Edw_88HvHv0-";

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkUser() {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', 'edyinvesti')
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      console.log("Usuário 'edyinvesti' não encontrado na tabela profiles.");
    } else {
      console.error("Erro ao buscar usuário:", error.message);
    }
  } else {
    console.log("Usuário encontrado!", data);
  }
}

checkUser();
