/**
 * Categorizes user input and returns varied, personalized coaching responses.
 * Not therapy — motivational support only.
 */

export type ProblemType =
  | "procrastination"
  | "fear"
  | "overwhelm"
  | "self_doubt"
  | "general";

export interface CoachingResponse {
  empathy: string;
  clarity: string;
  steps: string[];
  quote: string;
}

const PROCRASTINATION = [
  "rimand", "procrastin", "domani", "dopo", "non ho voglia", "non inizio", "evit", "posticip", "lazy", "delay", "put off",
];
const FEAR = [
  "paura", "pauro", "ansia", "ansios", "terror", "panico", "timor", "preoccup", "worried", "afraid", "anxious", "scared",
];
const OVERWHELM = [
  "sopraffatt", "troppo", "non ce la faccio", "troppe cose", "stress", "overwhelm", "burnout", "esaurit", "caos", "confus",
];
const SELF_DOUBT = [
  "non sono capace", "non sono brav", "non ce la farò", "non valgo", "insicur", "dubbio", "doubt", "worthless", "impostor",
];

const CRISIS_KEYWORDS = [
  "suicid", "uccidermi", "morire", "autolesion", "tagliarmi", "abus", "violenz", "emergenza", "pericolo",
  "kill myself", "want to die", "self-harm", "abuse", "emergency",
];

function matchKeywords(text: string, keywords: string[]): boolean {
  const lower = text.trim().toLowerCase();
  return keywords.some((k) => lower.includes(k));
}

export function detectCrisis(text: string): boolean {
  return matchKeywords(text, CRISIS_KEYWORDS);
}

export function getProblemType(text: string): ProblemType {
  const lower = text.trim().toLowerCase();
  if (matchKeywords(lower, PROCRASTINATION)) return "procrastination";
  if (matchKeywords(lower, FEAR)) return "fear";
  if (matchKeywords(lower, OVERWHELM)) return "overwhelm";
  if (matchKeywords(lower, SELF_DOUBT)) return "self_doubt";
  return "general";
}

// Multiple variations per type so responses feel different
const RESPONSES: Record<ProblemType, CoachingResponse[]> = {
  procrastination: [
    {
      empathy: "Rimandare non significa che non te la senti: spesso significa che la cosa conta davvero e hai paura di sbagliare. È umano.",
      clarity: "Il blocco che senti è spesso la mente che chiede più chiarezza. Non serve fare tutto: serve fare il primo micro-passo.",
      steps: [
        "Scegli una sola azione piccolissima (es. aprire il file, scrivere una riga) e falla nei prossimi 5 minuti.",
        "Scrivi in una frase: «La cosa peggiore che può succedere se inizio è…». Spesso ci si accorge che è gestibile.",
        "Dopo il primo mini-step, festeggia con qualcosa di piccolo (un caffè, una pausa). Il cervello impara che iniziare paga.",
      ],
      quote: "Il momento migliore per iniziare era ieri. Il secondo migliore è adesso.",
    },
    {
      empathy: "Capita a tutte di sentire che «domani sarà il giorno giusto». Quel senso di blocco è reale e non è pigrizia.",
      clarity: "La procrastinazione di solito nasconde paura del giudizio o della fatica. Dare un nome al motivo aiuta a scioglierlo.",
      steps: [
        "Imposta un timer di 10 minuti e fai solo quello che puoi in quel tempo. Poi puoi fermarti senza sensi di colpa.",
        "Chiediti: «Cosa mi blocca davvero?» (paura di sbagliare, noia, troppa complessità?) e scrivilo.",
        "Riduci la posta in gioco: prova a fare una «versione brutta» del compito. L’obiettivo è solo iniziare.",
      ],
      quote: "Un passo alla volta trasforma l’immobilità in movimento.",
    },
    {
      empathy: "Rimandare non ti definisce. È una strategia che la mente usa quando si sente sotto pressione; si può cambiare con pazienza.",
      clarity: "Spesso il carico che senti è su «tutto il progetto». Restringere al «solo oggi, solo un pezzetto» alleggerisce.",
      steps: [
        "Scrivi le prime tre parole che ti vengono in mente sul compito. Poi una sola azione che richiede meno di 2 minuti.",
        "Elimina le distrazioni per 15 minuti (telefono in un’altra stanza, tab chiuse) e lavora solo su quell’azione.",
        "Quando hai finito quel mini-step, annota come ti senti. Ricordare che «dopo» ci si sente meglio aiuta la prossima volta.",
      ],
      quote: "Non devi vedere tutta la scala. Basta salire il primo gradino.",
    },
  ],
  fear: [
    {
      empathy: "La paura che senti è un segnale che qualcosa per te conta. Non devi farla sparire: puoi imparare a camminare accanto.",
      clarity: "Spesso la paura si nutre di scenari che non sono ancora realtà. Portare l’attenzione al «qui e ora» riduce il rumore.",
      steps: [
        "Fai 3 respiri lunghi: inspira per 4, trattieni per 4, espira per 6. Ripeti due volte.",
        "Scrivi: «In questo momento, in questa stanza, sono al sicuro?» Se sì, permetti al corpo di ricevere questo messaggio.",
        "Scegli una cosa concreta che puoi controllare oggi (anche piccola) e falla. Riprendere il controllo riduce l’impotenza.",
      ],
      quote: "Il coraggio non è assenza di paura, è agire nonostante essa.",
    },
    {
      empathy: "Sentirsi impaurite o in ansia è normale quando siamo fuori dalla zona di comfort. Il tuo corpo sta cercando di proteggerti.",
      clarity: "L’ansia spesso amplifica i rischi. Chiederti «Quali prove ho che la cosa andrà male?» aiuta a ridimensionare.",
      steps: [
        "Nomina ad alta voce cosa stai provando: «Sto sentendo ansia.» Dare un nome riduce la reattività del cervello.",
        "Metti i piedi per terra e senti il contatto con il pavimento. Porta l’attenzione al presente per qualche secondo.",
        "Pensa a una volta in cui hai superato una paura. Cosa hai fatto allora? Anche un piccolo gesto simile può aiutare ora.",
      ],
      quote: "Ogni volta che hai avuto paura e hai agito comunque, hai già vinto.",
    },
  ],
  overwhelm: [
    {
      empathy: "Quando tutto sembra troppo, è normale sentirsi schiacciate. Non sei tu a non farcela: è il carico che è davvero pesante.",
      clarity: "Il sovraccarico si riduce quando smettiamo di tenere tutto in testa. Mettere nero su bianco libera spazio mentale.",
      steps: [
        "Prendi un foglio e scrivi tutto quello che hai in mente, senza ordine. Non fare nulla dopo: solo svuotare.",
        "Dalla lista, scegli UNA sola cosa da fare oggi. Il resto può aspettare. Una cosa è già un successo.",
        "Se puoi, delega o rimanda qualcosa (anche una sola). Dire «non ora» non è egoismo, è scelta.",
      ],
      quote: "Non devi fare tutto. Devi fare la prossima cosa giusta.",
    },
    {
      empathy: "Sentirsi sopraffatte non significa essere deboli. Significa che stai tenendo insieme molte cose e meriti un respiro.",
      clarity: "La sensazione di «non ce la faccio» spesso riguarda «tutto insieme». Spezzare in pezzi piccoli rende tutto più gestibile.",
      steps: [
        "Ferma tutto per 5 minuti. Bevanda calda, finestra aperta, niente schermi. Solo pausa.",
        "Scrivi le 3 cose più urgenti. Poi scegli solo la prima e chiediti: «Qual è il minimo che posso fare per questa?»",
        "Comunica a qualcuno che oggi stai al limite. Anche solo dirlo ad alta voce riduce il peso.",
      ],
      quote: "Un passo alla volta. Un respiro alla volta.",
    },
  ],
  self_doubt: [
    {
      empathy: "Il dubbio su di te non riflette la realtà: riflette quanto sei critica con te stessa. Molte persone che ammiri dubitano di sé.",
      clarity: "La sindrome dell’impostore nasce quando confondiamo «non so fare tutto» con «non sono capace». Nessuno sa fare tutto.",
      steps: [
        "Scrivi tre cose che hai fatto di buono (anche piccole) nell’ultima settimana. Rileggile senza sminuirle.",
        "Chiediti: «Se una amica fosse nella mia situazione, le direi che non è capace?» Applica la stessa gentilezza a te.",
        "Scegli una competenza che hai e usala oggi in un modo minimo. L’azione riduce il rumore del dubbio.",
      ],
      quote: "Sei più capace di quanto la paura ti faccia credere.",
    },
    {
      empathy: "Sentirsi «non all’altezza» è comune, soprattutto quando si tiene la barra alta. Non è la verità su di te.",
      clarity: "Il cervello tende a ricordare i fallimenti e a svalutare i successi. Bilanciare con i fatti aiuta a ricalibrarsi.",
      steps: [
        "Fai una lista di 5 momenti in cui hai superato una difficoltà (lavoro, relazione, salute). Rileggila.",
        "Scrivi una frase che ti rappresenti quando sei a posto con te stessa. Tienila dove la vedi spesso.",
        "Oggi fai una cosa che sai fare bene, anche piccola. Ricordare al cervello che «so fare» indebolisce il dubbio.",
      ],
      quote: "Non devi essere perfetta per essere abbastanza.",
    },
  ],
  general: [
    {
      empathy: "Quello che stai attraversando ha un peso. Prendersi un momento per nominarlo è già un atto di cura verso di te.",
      clarity: "A volte il blocco nasce dalla confusione su «da dove iniziare». La chiarezza non deve essere totale: basta il prossimo passo.",
      steps: [
        "Fai un respiro profondo e chiediti: «Cosa mi farebbe sentire un po’ meglio in questo momento?» Anche una risposta piccola va bene.",
        "Scegli un’azione che richiede meno di 5 minuti e falla. Non serve risolvere tutto, solo muovere qualcosa.",
        "Se puoi, condividi con qualcuno come ti senti. Anche una frase può alleggerire.",
      ],
      quote: "Ogni momento è un nuovo inizio. Non devi fare tutto oggi.",
    },
    {
      empathy: "È okay non stare bene. Non devi essere produttiva o «positiva» per meritare gentilezza, soprattutto la tua.",
      clarity: "Il primo passo non deve essere grande. Deve solo essere reale. Piccolo e reale batte perfetto e immobile.",
      steps: [
        "Scrivi in una riga cosa ti blocca o ti preoccupa. Metterlo nero su bianco riduce la nebbia.",
        "Fai una cosa che nutre il corpo: acqua, cibo, movimento anche minimo. Il corpo e la mente sono collegati.",
        "Datti il permesso di non fare tutto. Scegli una cosa da non fare oggi e accetta che va bene così.",
      ],
      quote: "Piccoli passi portano lontano.",
    },
    {
      empathy: "Stai facendo del tuo meglio in un momento che non è facile. Riconoscerlo è già un atto di rispetto verso di te.",
      clarity: "Quando ci sentiamo bloccate, spesso abbiamo bisogno di meno pressione, non di più. Ridurre il carico è una strategia.",
      steps: [
        "Elenca 3 cose che oggi sono andate bene (anche minime). Riconoscere il positivo ridimensiona il senso di fallimento.",
        "Scegli una sola priorità per il resto della giornata. Tutto il resto può aspettare.",
        "Se puoi, esci per una breve passeggiata o apri la finestra. Un cambio di contesto aiuta a «resettare» un po’ la mente.",
      ],
      quote: "Oggi basta fare quello che oggi permette.",
    },
  ],
};

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getCoachingResponse(userInput: string): CoachingResponse {
  const type = getProblemType(userInput);
  const options = RESPONSES[type];
  return pickRandom(options);
}
