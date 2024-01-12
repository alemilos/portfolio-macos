// EACH OUTPUT must be in the selected language
// The terminal process asks the user to type
// Print to the screen the available commands
// When the user types, it checks if the command is correct, than executes it or tell the user the command does not exist

function command(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      break;
    case "ls":
      // list apps
      break;
    case "info app#":
      // tell what the app is about
      break;
    case "whoami":
      // tell the user who am i
      break;
  }
}

// COMMANDS

// help
help = {
  EN: [
    "<br>",
    "help                 Type help to know what help does",
    "apps                 Lists all available apps in this website",
    "info [app name]      Gives infos about selected app",
    "clear                Clear the terminal",
    "whoami               Who is Alessandro Milos?",
    "<br>",
  ],
  IT: [
    "<br>",
    "help                 Scrivi help per sapere quello che fa help",
    "apps                 Mostra tutte le app disponibili sul sito",
    "info [app name]      Fornisce informazioni sull' app selezionata",
    "clear                Pulisce il terminale",
    "whoami               Chi è Alessandro Milos?",
    "<br>",
  ],
};

// apps
apps = {
  EN: [
    "<br>",
    "Terminal",
    "Settings",
    "Notes",
    "Books",
    "Photos",
    "Mail",
    "<br>",
  ],
  IT: [
    "<br>",
    "Terminale",
    "Impostazioni",
    "Note",
    "Libri",
    "Foto",
    "Mail",
    "<br>",
  ],
};

info = {
  EN: {
    terminal: "Terminal is what you are staring at!",
    settings:
      "Settings can help you configure certain aspects of this portfolio",
    notes:
      "Notes is a little blog, on the left you can choose the post to read, on the right you can read it!",
    books:
      "Books shows all the books I'm reading, I've read and that I would like to read...",
    photos: "Photos shows my pictures, divided by age and month.",
    mail: "Mail can help you contacting me with your email",
  },
  IT: {
    terminale: "Terminale è dove ti trovi!",
    impostazioni:
      "Impostazioni contiene informazioni su di me, e consente di  cambiare il tema dell'applicazione, lingua",
    note: "Note è un blog in miniatura, sulla sinistra si possono trovare tutti i titoli dei post, e sulla destra invece si possono leggere una volta cliccati",
    libri:
      "Libri mostra i libri che sto leggendo, che ho letto, che vorrei leggere...",
    foto: "Foto mostra le mie foto, divise per anno e mese di inserimento.",
    mail: "Mail permette di contattarmi via email o tramite i social",
  },
};
