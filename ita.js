/** LEGENDA **/
/* 

TESTO FORMATTABILE:

GRASSETTO: doppio asterisco agli estremi (es. **PAROLE IN GRASSETTO**)
A CAPO: scrivere puntoacapo per andare a capo
CORSIVO: asterisco + i + asterisco, agli estremi (es. *i*PAROLE IN CORSIVO*i*)
SOTTOLINEATO: asterisco + ins + asterisco, agli estremi (es. *ins*PAROLE SOTTOLINEATE*ins*)
PEDICE: asterisco + sub + asterisco, agli estremi (es. *sub*PAROLE IN PEDICE*sub*)
APICE: asterisco + sup + asterisco, agli estremi (es. *sup*PAROLE IN APICE*sup*)
VIRGOLETTE: se hai bisogno di utilizzare le virgolette nel testo
ricordati di antecederle lo slash verso sinistra (es. \"ciao come stai\")
*/

const language = {
    lang: "Italiano",
    index: {
        loading_message: "Caricamento",
        nuVersion: "Nuova Versione!",
        sideMenu: {
            user: "Profilo Utente",
            signin: ["Effettua Login", "Registrazione", "Log Out"],
            home: "Torna alla Home",
            contact: "Contatti",
            help: "Cos'è YouMeAR?",
            reset: "Ripristina Avvisi",
            resetApp: "Reset APP",
            reload: "Ricarica Pagina",
            privacy: "Privacy",
            info: "Info",
            markerAR: "Diventa partner",
            close: "Chiudi menu",
            /* DEVELOPER OPTIONS */
            options: "..."
        },
        /* TESTO FORMATTABILE */
        sideMenuAction: ['Nuovo puntoacapo Marker', "Lista puntoacapo Marker", "Vai alla puntoacapo Camera"]
        /* FINE TESTO FORMATTABILE */
    },
    createmedia: {
        photo: "Scatta una foto",
        video: "Gira un video",
        share: "Condividi"
    },
    user: {
        userChoose1: ["Continua come", "UTENTE"],
        userChoose2: ["Continua come", "PROFESSIONISTA"],
        progate1: ["Sei già registrato?", "ACCEDI"],
        progate2: ["Sei nuovo?", "INIZIA SUBITO"],
    },
    signin: {
        title: "Accedi a",
        subtitle: "YouMeAR!",
        button: "Accedi",
        form: [
            {
                type: "email",
                name: "email",
                label: "Email",
                pro: false
            },
            {
                type: "password",
                name: "password",
                label: "Password",
                pro: false
            },
        ]
    },
    signup: {
        title: "Crea un Account",
        subtitle: "YouMeAR!",
        button: ["Avanti", "Registrati"],
        policyInteraction: "SCOPRI DI PIÙ...",
        policyTitle: "accetta le condizioni generali del servizio.",
        policyDescription: "Al fine di permettere la sua iscrizione al Sito e consentirle di accedere gratuitamente alla Community le chiediamo di prendere visione e di accettare le condizioni generali che disciplinano l’accesso ai servizi offerti. Al momento di iscrizione al Sito e della registrazione dei suoi dati personali lei dovrà dichiarare di essere maggiorenne e di avere preso visione delle condizioni generali per l’accesso ai servizi offerti dal Sito, che le chiediamo di accettare espressamente mediante la sottoscrizione elettronica, facendo un click sullo spazio \"Accetto\".",
        policyDialogTitle: "Leggi e acceta le condizioni.",
        /* TESTO FORMATTABILE */
        policyDialogDescription: [
            [
                "**title1**", // TITOLO DEL PARAGRAFO
                "description1 puntoacapo **description1.1** puntoacapo description1.2 ... etc ..." // DESCRIZIONE DEL PARAGRAFO
            ],
            [
                "**title2**", // TITOLO DEL PARAGRAFO
                "description2 puntoacapo description2.1 puntoacapo description2.2 ... etc ..." // DESCRIZIONE DEL PARAGRAFO
            ],
            [
                "**title3**", // TITOLO DEL PARAGRAFO
                "description3 puntoacapo description3.1 puntoacapo *ins*description3.2*ins* ... etc ..." // DESCRIZIONE DEL PARAGRAFO
            ],
        ],
        policyDialogYep: 'Accetta',
        policyDialogNope: 'Rifiuta',
        /* FINE TESTO FORMATTABILE */
        recTitle: "Hai già un account?",
        actionRecTitle: "vai al Login",
        form: [
            {
                type: 'text',
                name: 'name',
                label: 'Nome',
                pro: false,
                required: true,
                page: 1
            },
            {
                type: 'text',
                name: 'surname',
                label: 'Cognome',
                pro: false,
                required: true,
                page: 1
            },
            {
                type: 'text',
                name: 'rec_nome_azienda',
                label: 'Nome Azienda',
                pro: true,
                required: true,
                page: 2
            },
            {
                type: 'text',
                name: 'rec_piva',
                label: 'Partita Iva',
                pro: true,
                required: true,
                page: 2
            },
            {
                type: 'mail',
                name: 'email',
                label: 'Email',
                pro: false,
                required: true,
                page: 3
            },
            {
                type: 'password',
                name: 'password',
                label: 'Crea Password',
                pro: false,
                required: true,
                page: 3
            },
            {
                type: 'password',
                name: 'password_confirmation',
                label: 'Conferma Password',
                pro: false,
                required: true,
                page: 3
            }
        ]
    },
    homeTitle1: ["IMMAGINA", "CREA", "VIVI!"],
    /* TESTO FORMATTABILE */
    homeTitle12: "Crea la tua puntoacapo **Realtà Aumentata puntoacapo GRATIS!**",
    /* FINE TESTO FORMATTABILE */
    homeTitle2: ["Apri", "CAMERA"],
    homeTitle3: ["Modalità", "MARKERLESS"],
    homeTitle4: ["Come usare", "L'APP"],
    homeTitleLI: ["Effettua il", "LogIn"],
    homeTitleLO: ["Effettua il", "LogOut"],
    marker: {
        title: "Immagina, crea, vivi",
        description: [
            /* TESTO FORMATTABILE */
            "Inquadra le **immagini** con la **camera del tuo Smartphone** e scopri i contenuti multimediali in **Realtà Aumentata**.",
            /* FINE TESTO FORMATTABILE */
        ],
        button: "INQUADRA",
        question: {
            question: 'Aprire la camera?',
            description: "Quest'App sfrutta la tecnologia della realtà aumentata per l'esplorazione di contenuti virtuali, per cui è consigliata la supervisione di un adulto, in casi di utenti minorenni. Prima di utilizzare la realtà aumentata, assicurarsi che l'ambiente sia libero da ostacoli che possano mettere in pericolo l'utente",
            yepText: "si",
            nopeText: "no"
        }
    },
    placement: {
        title: "Posiziona modello 3D",
        description: [
            /* TESTO FORMATTABILE */
            "Posiziona nello spazio il **modello 3D** per ammirarlo con la **camera del tuo Smartphone**.",
            /* FINE TESTO FORMATTABILE */
        ],
        button: "POSIZIONA",
        question: {
            question: 'Aprire la camera?',
            description: "Quest'App sfrutta la tecnologia della realtà aumentata per l'esplorazione di contenuti virtuali, per cui è consigliata la supervisione di un adulto, in casi di utenti minorenni. Prima di utilizzare la realtà aumentata, assicurarsi che l'ambiente sia libero da ostacoli che possano mettere in pericolo l'utente",
            yepText: "si",
            nopeText: "no"
        }
    },
    arcamera: {
        title: "Vuoi divertirti con la Realtà Aumentata?",
        button1: "Torna alla home",
        button2: "Resta qui",
        button3: "Inquadra Marker",
        button4: "Come funziona?"
    },
    createmarker: {
        preview: {
            title: 'Anteprima',
            subtitle: 'Sposta lo smartphone con il dito per simulare la Realtà Aumentata.',
            interaction: 'L\'interazione si avvierà tra',
            seconds: 's',
            button: 'Chiudi'

        },
        step0: {
            title: "Dai un Nome",
            subtitle: "alla tua Realtà Aumentata",
            button: ["Salta", "Continua!"],
            placeholder: "Nome",
            noName: "Marker senza nome"
        },
        step1: {
            title: "Scegli forma",
            subtitle: "Scegli la tua forma preferita",
            //geometry: ["Orizzontale", "Verticale", "Quadrato", "Circolare"],
            geometry: [
                {
                    name: 'horizontal',
                    screenName: 'Orizzontale',
                    pro: false,
                    ratio: "16/9", // 16:9
                    orientation: 0,
                    shapeSRC: "",
                },
                {
                    name: 'vertical',
                    screenName: 'Verticale',
                    pro: false,
                    ratio: "9/16", // 9:16
                    orientation: 1,
                    shapeSRC: "",
                },
                {
                    name: 'square',
                    screenName: 'Quadrato',
                    pro: false,
                    ratio: "1/1", // 1:1
                    orientation: 2,
                    shapeSRC: "",
                },
                {
                    name: 'circle',
                    screenName: 'Cerchio',
                    pro: true,
                    ratio: "1/1", // 1:1
                    orientation: 2,
                    shapeSRC: "",
                }
            ],
            button: "scegli "
        },
        step2: {
            title: "Carica Immagine",
            subtitle: "Carica l'immagine che vorresti in Realtà Aumentata.",
            button: "Continua!",
            image: "Carica immagine",
            crop: "Taglia!"
        },
        step3: {
            title: "Carica Video",
            subtitle: "Carica il video che vorresti in Realtà Aumentata.",
            button: "Continua!",
            video: "Carica video",
            crop: "Ritaglia Video",
        },
        step4: {
            title: "Inserisci il link",
            subtitle: "Link per l'interazione quando il video finisce.",
            button: "Continua!",
            placeholder: "Link URL",
            prefix: 'https://www.'
        },
        step5: {
            title: "Imposta parametri",
            subtitle: "Fai gli ultimi ritocchi sui parametri.",
            button: "Carica marker",
            setting: [
                {
                    name: "Video Follow",
                    id: "videofollow",
                    description: "Il VideoFollow ti permetterà di godere il video a schermo intero se il marker non è più inquadrato.",
                    action: "ok, ho capito",
                    img: setting_img_1, // non cambiare
                    imgc: setting_img_1c, // non cambiare
                    defaultValue: true // non cambiare
                },
                {
                    name: "Toolbar",
                    id: "toolbar",
                    description: "La toolbar ti permette di tornare indietro anche su devices senza tasti fisici.",
                    action: "ok, ho capito",
                    img: setting_img_2, // non cambiare
                    imgc: setting_img_2c, // non cambiare
                    defaultValue: false // non cambiare
                },
                {
                    name: "Toolbar Up",
                    id: "toolbarup",
                    description: "La toolbar Up sposta la toolbar in alto.",
                    action: "ok, ho capito",
                    img: setting_img_3, // non cambiare
                    imgc: setting_img_3c, // non cambiare
                    defaultValue: false // non cambiare
                }
            ]
        },
        step6: {
            title: "Creazione Marker",
            subtitle: "Il marker sta completando le fasi di creazione",
            done_title: "Fatto!",
            done_subtitle: "Il marker è pronto per essere inquadrato.",
            error_title: "Qualcosa non va! :(",
            error_subtitle: "Forse è un problema di connessione...",
            title1: "non so che scrivere",
            button: "Continua!",
            gotogameratooltip: "Vai alla camera",
            done_uptitle: "Fai TAP",
            done_downtitle: "e vai alla camera!",
            error_uptitle: "Errore",
            error_downtitle: "Clicca sulla X per riprovare",
            or: "oppure torna alla Home",
            download: "scarica l'APP da",
            download_title: "Marker Pronto.",
            download_subtitle: "apri YMAR oppure",
            link: [
                {
                    name: 'Apple Store',
                    link: 'https://apps.apple.com/it/app/youmear/id1474981907'
                },
                {
                    name: 'Google Play',
                    link: 'https://play.google.com/store/apps/details?id=com.IBSSRL.YouMeAR'
                }
            ],
        },
        tuts: [
            {
                img: step1, // non cambiare
                cover: step1c, // non cambiare
                title: "Step 1",
                subtitle: "Scegli la forma",
                autorizzato: true,
                description: "Seleziona la forma dell'immagine che caratterizzerà la TUA Realtà Aumentata"
            },
            {
                img: step2, // non cambiare
                cover: step2c, // non cambiare
                title: "Step 2",
                subtitle: "Carica immagine",
                autorizzato: true,
                description: "Seleziona l'immagine che vuoi rendere in Realtà Aumentata."
            },
            {
                img: step3, // non cambiare
                cover: step3c, // non cambiare
                title: "Step 3",
                subtitle: "Carica video",
                autorizzato: true,
                description: "Seleziona il video da sovrapporre all'immagine."
            },
            {
                img: step4, // non cambiare
                cover: step4c, // non cambiare
                title: "Step 4",
                subtitle: "Gestisci impostazioni",
                autorizzato: false,
                description: "Siamo quasi pronti caricare la tua Realtà Aumentata, inserisci il link per l'interazione e imposta i parametri del tuo marker."
            }
        ],
        tuts_index: {
            title: 'Come funziona',
            button: 'OK, HO CAPITO',
            next: 'AVANTI',
            hidden: 'Non mostrare più'
        }
    },
    app: {
        description: [
            /* TESTO FORMATTABILE */
            "Con **YouMeAR** creare **immagini interattive** sarà **semplicissimo** grazie alla magia della **Realtà Aumentata**."
            /* FINE TESTO FORMATTABILE */
        ],
        title: "Immagina, crea, vivi",
        /* TESTO FORMATTABILE */
        title1: "**MODALITÀ AR:**",
        title2: "**MODALITÀ MARKERLESS:**",
        /* FINE TESTO FORMATTABILE */
    },
    listMarker: {
        title: 'Lista Marker',
        subtitle: 'Elenco dei tuoi marker',
        more: 'Carica altri risultati...',
        description: {
            general1: 'Stato',
            general2: 'Qualità',
            general3: 'Caricato il',
            stats1: 'Totali',
            stats2: 'Questo mese',
            stats3: 'Mese scorso',
            stats4: 'Click sul link',
            int_description1: 'Quante volte un utente ha cliccato sulla funzione "LINK".',
            stats5: 'Schermo intero',
            int_description2: 'Numero di visualizzazioni a schermo intero.',
            checkout1: 'Inquadramenti rimanenti',
            checkout2: 'Ore rimanenti',
            int_checkout1: 'Numero di inquadramenti e/o ore rimanenti alla scadenza del marker.',
            deleteMarker: 'Cancella Marker'
        },
        details: "Dettagli",
        active: "Attiva",
        deactive: "Disattiva",
        delete: "Elimina",
        enabled: 'Attivo',
        disabled: 'Disattivo',
        title_description: {
            general: 'Info Generali',
            recogs: 'Inquadramenti',
            interaction: 'Statistiche',
            checkout: 'Traffico residuo'
        },
        noName: 'Senza Nome',
        nothing: 'nessun marker ... '
    }
}; 