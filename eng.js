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
    lang: "English",
    index: {
        loading_message: "Uploading",
        nuVersion: "New version!",
        sideMenu: {
            user: "Account",
            signin: ["Login", "Registration", "Log Out"],
            home: "Home",
            contact: "Contacts",
            help: "About YouMeAR",
            reset: "Update notices",
            resetApp: "Reset APP",
            reload: "Update page",
            privacy: "Privacy",
            info: "Info",
            markerAR: "Sign in",
            close: "Close menu",
            /* DEVELOPER OPTIONS */
            options: "..."
        },
        /* TESTO FORMATTABILE */
        sideMenuAction: ['New puntoacapo Marker', "Marker puntoacapo List", "Use puntoacapo Camera"]
        /* FINE TESTO FORMATTABILE */
    },
    createmedia: {
        photo: "Take a photo",
        video: "Record a video",
        share: "Share"
    },
    user: {
        userChoose1: ["Continue as", "USER"],
        userChoose2: ["Continue as", "EXPERT"],
        progate1: ["For registered users", "LOGIN"],
        progate2: ["For new users", "START NOW"],
    },
    signin: {
        title: "Sign in to",
        subtitle: "YouMeAR!",
        button: "Sign in",
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
        title: "Create an Account",
        subtitle: "YouMeAR!",
        button: ["Next", "Complete the registration"],
        policyInteraction: "LEARN MORE...",
        policyTitle: "agree to general terms and conditions of service.",
        policyDescription: "In order to complete your subscription to the website and have free access to the Community, please agree to general terms and conditions about services' use. During the subscription and the registration of your personal information, you must conferm you have come of age and you have read general conditions for services offered by the Website. Click here to confirm \"I agree\".",
        policyDialogTitle: "Read and agree to general terms and conditions",
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
        policyDialogYep: 'I agree',
        policyDialogNope: 'I refuse',
        /* FINE TESTO FORMATTABILE */
        recTitle: "Have you an account?",
        actionRecTitle: "Procede with Login",
        form: [
            {
                type: 'text',
                name: 'name',
                label: 'Name',
                pro: false,
                required: true,
                page: 1
            },
            {
                type: 'text',
                name: 'surname',
                label: 'Surname',
                pro: false,
                required: true,
                page: 1
            },
            {
                type: 'text',
                name: 'rec_name_business',
                label: 'Business Name',
                pro: true,
                required: true,
                page: 2
            },
            {
                type: 'text',
                name: 'rec_VATnumber',
                label: 'VAT number',
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
                label: 'Create Password',
                pro: false,
                required: true,
                page: 3
            },
            {
                type: 'password',
                name: 'password_confirmation',
                label: 'Confirm password',
                pro: false,
                required: true,
                page: 3
            }
        ]
    },
    homeTitle1: ["IMAGINE", "CREATE", "ENJOY!"],
    /* TESTO FORMATTABILE */
    homeTitle12: "Create your puntoacapo **Augmented Reality puntoacapo FOR FREE!**",
    /* FINE TESTO FORMATTABILE */
    homeTitle2: ["Open", "CAMERA"],
    homeTitle3: ["Modalità", "MARKERLESS"],
    homeTitle4: ["How to use", "THE APP"],
    homeTitleLI: ["", "LogIn"],
    homeTitleLO: ["", "LogOut"],
    marker: {
        title: "Imagine, Create, Enjoy",
        description: [
            /* TESTO FORMATTABILE */
            "Frame **your image** with the **camera of your smartphone** and explor the multimedia contents in **Augmented Reality**.",
            /* FINE TESTO FORMATTABILE */
        ],
        button: "FRAME",
        question: {
            question: 'Do you want to open your camera?',
            description: "The APP uses Augmented Reality technology for the exploration of virutal contents. For this reason the supervision is reccommended with minor users. Before starting to use Augmented Reality, please ensure that there are not any obtables dangerous for the user",
            yepText: "si",
            nopeText: "no"
        }
    },
    placement: {
        title: "Position your 3D model",
        description: [
            /* TESTO FORMATTABILE */
            "Position the **3D model** to admire it with the **camera of your Smarthphone**.",
            /* FINE TESTO FORMATTABILE */
        ],
        button: "POSITION",
        question: {
            question: 'Do you want to open the camera?',
            description: "The APP uses Augmented Reality technology for the exploration of virutal contents. For this reason the supervision is reccommended with minor users. Before starting to use Augmented Reality, please ensure that there are not any obtables dangerous for the user",
            yepText: "yes",
            nopeText: "no"
        }
    },
    arcamera: {
        title: "Do you want to have fun wih Augmented Reality?",
        button1: "Home",
        button2: "Stay on this page",
        button3: "Frame the Marker",
        button4: "How does it work?"
    },
    createmarker: {
        preview: {
            title: 'Preview',
            subtitle: 'Move the screen of the Smartphone to simulate Augmented Reality.',
            interaction: 'The interaction starts in',
            seconds: 's',
            button: 'Close'

        },
        step0: {
            title: "Name",
            subtitle: "your Augmented Reality",
            button: ["Skip", "Next"],
            placeholder: "Name",
            noName: "Marker without name"
        },
        step1: {
            title: "Choose the shape",
            subtitle: "Choose your favorite one",
            //geometry: ["Orizzontale", "Verticale", "Quadrato", "Circolare"],
            geometry: [
                {
                    name: 'horizontal',
                    screenName: 'Horizontal',
                    pro: false,
                    ratio: "16/9", // 16:9
                    orientation: 0,
                    shapeSRC: "",
                },
                {
                    name: 'vertical',
                    screenName: 'Vertical',
                    pro: false,
                    ratio: "9/16", // 9:16
                    orientation: 1,
                    shapeSRC: "",
                },
                {
                    name: 'square',
                    screenName: 'Square',
                    pro: false,
                    ratio: "1/1", // 1:1
                    orientation: 2,
                    shapeSRC: "",
                },
                {
                    name: 'circle',
                    screenName: 'Circle',
                    pro: true,
                    ratio: "1/1", // 1:1
                    orientation: 2,
                    shapeSRC: "",
                }
            ],
            button: "Choose"
        },
        step2: {
            title: "Upload Image",
            subtitle: "Upload the image for your Augmented Reality.",
            button: "Next",
            image: "Upload image",
            crop: "Cut"
        },
        step3: {
            title: "Upload video",
            subtitle: "Upload the video choosen for Augmented Reality.",
            button: "Next",
            video: "Upload video",
            crop: "Cut Video",
        },
        step4: {
            title: "Add link",
            subtitle: "Link for the interaction when the video ends.",
            button: "Next",
            placeholder: "Link URL",
            prefix: 'https://www.'
        },
        step5: {
            title: "Set parameters",
            subtitle: "Set final parameters.",
            button: "Upload marker",
            setting: [
                {
                    name: "Video Follow",
                    id: "videofollow",
                    description: "VideoFollow provides full screen video when the marker is not framed.",
                    action: "I understood",
                    img: setting_img_1, // non cambiare
                    imgc: setting_img_1c, // non cambiare
                    defaultValue: true // non cambiare
                },
                {
                    name: "Toolbar",
                    id: "toolbar",
                    description: "Toolbar allows to come back also using devices without physical buttons.",
                    action: "I understood",
                    img: setting_img_2, // non cambiare
                    imgc: setting_img_2c, // non cambiare
                    defaultValue: false // non cambiare
                },
                {
                    name: "Toolbar Up",
                    id: "toolbarup",
                    description: "Toolbar Up moves up the toolbar.",
                    action: "I understood",
                    img: setting_img_3, // non cambiare
                    imgc: setting_img_3c, // non cambiare
                    defaultValue: false // non cambiare
                }
            ]
        },
        step6: {
            title: "Creation of the Marker",
            subtitle: "The creation of the marker will be available in few minuts",
            done_title: "Done!",
            done_subtitle: "The marker is ready for the frame.",
            error_title: "Something goes wrong :(",
            error_subtitle: "It may be a connection issue...",
            button: "Next",
            gotogameratooltip: "Use camera",
            done_uptitle: "TAP the screen",
            done_downtitle: "and use the camera!",
            error_uptitle: "Error",
            error_downtitle: "Click on X to try again",
            or: "or go back to the Home",
            download: "dowload the APP from",
            download_title: "Marker is ready.",
            download_subtitle: "open YMAR or",
            link: [
                {
                    name: 'use Apple Store',
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
                subtitle: "Choose the frame",
                autorizzato: true,
                description: "Select the frame choosen for YOUR Augmented Reality"
            },
            {
                img: step2, // non cambiare
                cover: step2c, // non cambiare
                title: "Step 2",
                subtitle: "Upload the image",
                autorizzato: true,
                description: "Select the image choosen for Augmented Reality."
            },
            {
                img: step3, // non cambiare
                cover: step3c, // non cambiare
                title: "Step 3",
                subtitle: "Upload the video",
                autorizzato: true,
                description: "Select the video to overlap on the image."
            },
            {
                img: step4, // non cambiare
                cover: step4c, // non cambiare
                title: "Step 4",
                subtitle: "Settings",
                autorizzato: false,
                description: "Your Augmented Reality is ready, add the link for the interaction and set the parameters of your marker."
            }
        ],
        tuts_index: {
            title: 'How it works',
            button: 'I UNDERSTOOD',
            next: 'NEXT',
            hidden: 'Do not show this message again'
        }
    },
    app: {
        description: [
            /* TESTO FORMATTABILE */
            "With **YouMeAR** the creation of **interactive images** will be **extremely easy** thanks to the magic of **Augmented Reality**."
            /* FINE TESTO FORMATTABILE */
        ],
        title: "Imagine, create, enjoy",
        /* TESTO FORMATTABILE */
        title1: "**AR MODALITY:**",
        title2: "**MARKERLESS MODALITY:**",
        /* FINE TESTO FORMATTABILE */
    },
    listMarker: {
        title: 'Marker List',
        subtitle: 'Marker List',
        more: 'Upload more results...',
        description: {
            general1: 'Status',
            general2: 'Quality',
            general3: 'Upload on',
            stats1: 'Total',
            stats2: 'This month',
            stats3: 'Last month',
            stats4: 'Click on the link',
            int_description1: 'How many times does a client click on "LINK" function.,
            stats5: 'Full screen',
            int_description2: 'Number of full screen views.',
            checkout1: 'Residual frameworks',
            checkout2: 'Residual hours',
            int_checkout1: 'Number of residual frameworks and/or hour at the marker\'s deadline.',
            deleteMarker: 'Delate Marker'
        },
        details: "Details",
        view: "display Image",
        active: "Turn on",
        deactive: "Turn off",
        delete: "Delate",
        enabled: 'TUrned on',
        disabled: 'Turned off',
        title_description: {
            general: 'General Info',
            recogs: 'Frameworks',
            interaction: 'Statistics',
            checkout: 'Residual traffic'
        },
        noName: 'No name',
        nothing: 'no marker ... '
    }
};