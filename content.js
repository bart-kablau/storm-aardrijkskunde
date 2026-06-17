/* =====================================================================
   Aardrijkskunde — buiteNLand 1 havo/vwo — H1 "Aarde in beweging"
   Leerstof voor de Storm-oefen-app (canonieke engine in tools/oefen-engine).
   Bron: 01-brontekst/H1-aarde-in-beweging.md + 03-proefwerken/antwoordmodel-B.md

   Vraagtypes (t): mc, gap, sequence, open, hotspot, label, vb, sleep
   Niveaus volgen de geografische vierslag:
     🥉 Brons  = Beschrijven (wat / waar / hoe heet het)
     🥈 Zilver = Verklaren   (hoe / waardoor)
     🥇 Goud   = Generaliseren + Evalueren (toepassen op nieuwe situatie + mening)
   ===================================================================== */

window.VAK = {
  id:"aardrijkskunde_h1",
  titel:"Aardrijkskunde met Storm — H1 Aarde in beweging",
  brand:"Aardrijkskunde met Storm",
  badge:"AK",
  mascotEmoji:"🌍",
  doelLabel:"begrip",
  spiekTitel:"Aardrijkskunde H1 — Aarde in beweging",
  wiskunde:false,
  begripVak:true,
  spraak:{ vraagLang:"nl-NL", antwoordLang:"nl-NL" },
  matching:{ stripInfinitief:false, accentTolerant:true, lidwoordTolerant:false },
  masteryHits:2,
  stapelGrootte:6,
  tegels:["leerstof","begrippen","proeftoets","spiekblad"]
};

/* ============================ LEERSTOF ============================ */
window.LEERSTOF = [

/* ---------- 1.1 De aardkorst verschuift ---------- */
{
  id:"aardkorst", emoji:"🧩", titel:"1.1 De aardkorst verschuift", paragraaf:"1.1",
  kort:"De aarde heeft 3 lagen (korst–mantel–kern). De platen drijven op de mantel: platentektoniek. Botsen ze, dan ontstaan plooiingsgebergten.",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "De aarde bestaat uit drie lagen: de dunne <b>aardkorst</b> (waarop wij leven), de gloeiend hete <b>aardmantel</b> van stroperig gesteente, en in het midden de <b>aardkern</b>.",
        "De aardkorst is gebroken in stukken: de <b>platen</b>. Die drijven heel langzaam op de mantel — zo snel als je teennagel groeit. Dat bewegen heet <b>platentektoniek</b>."
      ],
      regel:"3 lagen: aardkorst (dun) → aardmantel (heet, stroperig) → aardkern (binnenste, heetst).",
      vragen:[
        { t:"label", q:"Sleep de labels naar de juiste laag van de aarde.", beeld:"img/aardlagen-doorsnede.svg",
          doelen:[ {id:"korst",label:"aardkorst",x:0.5,y:0.075}, {id:"mantel",label:"aardmantel",x:0.5,y:0.235}, {id:"kern",label:"aardkern",x:0.5,y:0.5} ],
          w:"Van buiten naar binnen: aardkorst, aardmantel, aardkern." },
        { t:"mc", q:"Hoe noem je het heel langzaam bewegen van de aardplaten?",
          o:["platentektoniek","plooiingsgebergte","evolutie","geologie"], a:"platentektoniek",
          w:"De platen schuiven heel langzaam over de mantel: platentektoniek.",
          fout:{"plooiingsgebergte":"dat is een gebergte dat door botsen ontstaat, niet de beweging zelf.","geologie":"dat is de wetenschap die de aarde bestudeert."} },
        { t:"gap", q:"Lang geleden zaten alle continenten samen in één supercontinent: ___.",
          a:"Pangaea|pangea|pangaea", w:"Het supercontinent heette Pangaea; ruim 200 miljoen jaar geleden brak het uiteen." },
        { t:"mc", q:"Welke laag van de aarde is het binnenste én het heetst?",
          o:["de aardkern","de aardkorst","de aardmantel","de platen"], a:"de aardkern",
          w:"De aardkern zit in het midden en is het heetst." },
        { t:"hotspot", q:"Klik op de aardmantel.", beeld:"img/aardlagen-doorsnede.svg",
          zones:[ {vorm:"cirkel",x:0.5,y:0.235,r:0.11} ],
          w:"De aardmantel is de dikke, hete laag tussen de korst en de kern." }
      ] },
    { n:2, naam:"Zilver",
      uitleg:[
        "De platen <b>drijven</b> omdat de mantel eronder heel langzaam stroomt. Waar platen <b>uit elkaar</b> bewegen ontstaat nieuwe aardkorst; waar ze <b>botsen</b> verdwijnt korst of wordt hij omhooggeduwd.",
        "Botsen twee platen, dan worden de gesteentelagen samengeperst en omhooggeduwd: er ontstaat een <b>plooiingsgebergte</b>, zoals de Alpen en de Andes."
      ],
      regel:"Botsende platen → gesteente wordt samengeperst en omhooggeduwd → plooiingsgebergte.",
      vragen:[
        { t:"sequence", q:"Zet op volgorde hoe een plooiingsgebergte ontstaat.",
          stappen:["Twee platen bewegen naar elkaar toe","De platen botsen op elkaar","De gesteentelagen worden samengeperst","De lagen worden omhooggeduwd tot een gebergte"],
          w:"Botsen → samenpersen → omhoog. Denk aan een tafelkleed dat je samenschuift." },
        { t:"mc", q:"Waarom kunnen de platen bewegen?",
          o:["de mantel eronder stroomt heel langzaam","de wind duwt ze voort","de zee trekt ze mee","de zon trekt eraan"], a:"de mantel eronder stroomt heel langzaam",
          w:"De platen drijven als ijsschotsen op de stroperige, stromende mantel." },
        { t:"vb", q:"Bekijk hoe geologen weten dat Afrika en Zuid-Amerika ooit vastzaten.",
          opgave:"Pasten de continenten echt aan elkaar?",
          stappen:[
            {toon:"De kustlijnen passen als puzzelstukken",uitleg:"De westkust van Afrika past op de oostkust van Zuid-Amerika."},
            {toon:"Dezelfde fossielen aan beide kanten",uitleg:"Resten van hetzelfde dier liggen aan beide kusten."},
            {toon:"Dezelfde gesteenten en bergen lopen door",uitleg:"De gesteentelagen sluiten op elkaar aan."}
          ],
          waarom:{ q:"Wat bewijzen deze drie dingen samen?",
            o:["dat de continenten vroeger aan elkaar vastzaten","dat dieren konden zwemmen","dat er een brug was gebouwd"],
            a:"dat de continenten vroeger aan elkaar vastzaten" } },
        { t:"open", q:"Leg uit waarom de Alpen zijn ontstaan. Gebruik de woorden <b>botsen</b> en <b>omhoog</b>.", punten:2,
          modelantwoord:"Het stuk aardkorst van Italië/Afrika bewoog naar Europa toe. Daardoor botsten de platen, werd het gesteente ertussen samengeperst en omhooggeduwd — zo ontstond een plooiingsgebergte (de Alpen).",
          sleutelwoorden:[ {moet:["bots","tegen elkaar","naar elkaar"],syn:["duwen","drukken"]}, {moet:["omhoog","opgeduwd","omhooggeduwd"],syn:["opgeplooid","opgestuwd"]}, {moet:["plaat","afrika","italië","italie"],syn:["aardkorst"]} ],
          rubric:["Noemt dat de platen botsen / tegen elkaar duwen","Noemt dat het gesteente omhoog wordt geduwd"],
          w:"Afrika duwde tegen Europa; het gesteente ertussen werd opgeplooid." },
        { t:"mc", q:"Waar ontstaat juist NIEUWE aardkorst?",
          o:["waar platen uit elkaar bewegen","waar platen botsen","diep in de aardkern","op het strand"], a:"waar platen uit elkaar bewegen",
          w:"Waar platen uit elkaar gaan, komt magma omhoog dat stolt tot nieuwe korst." }
      ] },
    { n:3, naam:"Goud",
      uitleg:[
        "Platentektoniek werkt nog steeds door. Daardoor groeien sommige gebergten nog, schuift de Middellandse Zee langzaam dicht en verandert de wereldkaart over miljoenen jaren.",
        "Met platentektoniek kun je dingen <b>verklaren én voorspellen</b>: waarom zeeschelpen hoog in de bergen liggen, of hoe de aarde er in de verre toekomst uitziet."
      ],
      regel:"Wat je nu ziet (bergen, zeeën) is het gevolg van platen die al miljoenen jaren bewegen — en blijven bewegen.",
      vragen:[
        { t:"open", q:"Leg uit waarom je hoog in de bergen soms zeeschelpen of fossielen van zeedieren kunt vinden.", punten:2,
          modelantwoord:"Die grond is vroeger zeebodem geweest. Doordat platen tegen elkaar botsten, is die zeebodem samengeperst en omhooggeduwd tot een gebergte. De schelpen liggen dus mee omhoog.",
          sleutelwoorden:[ {moet:["zeebodem","zeebed","onder water","zee"],syn:["oceaanbodem"]}, {moet:["omhoog","opgeduwd","omhooggeduwd","opgeplooid"],syn:["opgestuwd"]}, {moet:["bots","platen","plaat"],syn:["tegen elkaar"]} ],
          rubric:["Noemt dat daar vroeger zee/zeebodem was","Noemt dat het door botsende platen omhoog is geduwd"],
          w:"Zeebodem + botsende platen → omhooggeduwd tot gebergte." },
        { t:"mc", q:"De Middellandse Zee wordt heel langzaam steeds kleiner. Hoe kan dat?",
          o:["Afrika beweegt naar Europa toe","het zeewater verdampt","er wordt zand in gestort","de maan trekt het water weg"], a:"Afrika beweegt naar Europa toe",
          w:"De Afrikaanse plaat schuift richting Europa; de zee ertussen knijpt dicht." },
        { t:"open", q:"De Alpen worden nog elk jaar een heel klein beetje hoger. Leg uit hoe dat kan.", punten:2,
          modelantwoord:"De Afrikaanse plaat duwt nog steeds tegen de Euraziatische plaat. Doordat de platen blijven botsen, wordt het gesteente nog steeds omhooggeduwd, dus groeit het gebergte nog.",
          sleutelwoorden:[ {moet:["nog steeds","blijven","door"],syn:["nog altijd"]}, {moet:["bots","duwt","duwen"],syn:["tegen elkaar"]}, {moet:["omhoog","opgeduwd"],syn:["opgestuwd"]} ],
          rubric:["Noemt dat de platen nog steeds botsen/duwen","Noemt dat het gesteente daardoor nog omhoog gaat"],
          w:"De platen botsen nog steeds, dus de opduwing gaat door." },
        { t:"mc", q:"Wat hebben de Alpen en de Andes met elkaar gemeen?",
          o:["allebei plooiingsgebergten door botsende platen","allebei vulkanen in de zee","allebei door wind ontstaan","allebei in Nederland"], a:"allebei plooiingsgebergten door botsende platen",
          w:"Beide ontstonden waar platen op elkaar botsen." },
        { t:"open", q:"Hoe zou de wereldkaart er over 100 miljoen jaar heel anders uit kunnen zien? Leg uit met platentektoniek.", punten:2,
          modelantwoord:"De platen blijven bewegen, dus de continenten schuiven verder. Sommige zeeën gaan dicht en nieuwe oceanen kunnen ontstaan; de continenten liggen dan op andere plekken dan nu.",
          sleutelwoorden:[ {moet:["platen","plaat"],syn:["continenten"]}, {moet:["bewegen","schuiven","verschuiven","door"],syn:["verplaatsen","drijven"]} ],
          rubric:["Noemt dat de platen/continenten blijven bewegen","Geeft een gevolg (zeeën dicht / nieuwe ligging)"],
          w:"Platen bewegen door → continenten komen elders te liggen." }
      ] }
  ]
},

/* ---------- 1.2 Aardbevingen ---------- */
{
  id:"aardbevingen", emoji:"🌐", titel:"1.2 Aardbevingen", paragraaf:"1.2",
  kort:"Een aardbeving is een trilling van de aardkorst langs plaatranden. Recht erboven = epicentrum. Kracht = schaal van Richter (elk punt 10× sterker).",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "Een <b>aardbeving</b> is een trilling van de aardkorst. Ze komen vooral voor langs <b>plaatranden</b>, waar platen langs elkaar bewegen.",
        "Het punt aan de oppervlakte recht bóven de beving heet het <b>epicentrum</b>; daar is de beving het sterkst. De kracht meet je met de <b>schaal van Richter</b>."
      ],
      regel:"Aardbeving = trilling langs plaatranden. Epicentrum = recht erboven, daar het sterkst.",
      vragen:[
        { t:"mc", q:"Wat is een aardbeving?",
          o:["een trilling van de aardkorst","een uitbarsting van lava","een hoge vloedgolf","een berg die ontstaat"], a:"een trilling van de aardkorst",
          w:"Een stuk aardkorst verschuift plotseling — dat voelen wij als een trilling." },
        { t:"mc", q:"Waar komen de meeste aardbevingen voor?",
          o:["langs plaatranden","midden op een plaat","alleen in woestijnen","alleen bij rivieren"], a:"langs plaatranden",
          w:"Op de randen van platen botsen of schuiven ze langs elkaar." },
        { t:"gap", q:"Het punt aan de oppervlakte recht boven de beving heet het ___.",
          a:"epicentrum", w:"Bij het epicentrum is de aardbeving het sterkst." },
        { t:"mc", q:"Waarmee meet je de kracht van een aardbeving?",
          o:["de schaal van Richter","de thermometer","de windkracht","de regenmeter"], a:"de schaal van Richter",
          w:"De schaal van Richter geeft de zwaarte (kracht) van een beving." },
        { t:"gap", q:"Elk punt hoger op de schaal van Richter betekent een ___ keer zo sterke beving.",
          a:"10|tien", w:"Een 6 is 10× zo sterk als een 5 en 100× zo sterk als een 4." }
      ] },
    { n:2, naam:"Zilver",
      uitleg:[
        "Aardbevingen ontstaan doordat platen langs elkaar bewegen maar soms <b>klem</b> zitten. De druk loopt op tot het stuk korst plotseling doorschiet — met een schok. Vergelijk het met een zware kast die in één keer een stukje meegeeft.",
        "De gevolgen hangen af van het land. In <b>rijke landen</b> bouwt men stevig en kan men evacueren, dus vallen er meestal minder doden dan in <b>arme landen</b>."
      ],
      regel:"Plaat zit klem → druk loopt op → schiet plotseling door = schok = aardbeving.",
      vragen:[
        { t:"sequence", q:"Zet op volgorde hoe een aardbeving ontstaat.",
          stappen:["Twee platen schuiven langs elkaar","De rand zit klem en blijft haken","De druk wordt steeds groter","De korst schiet plotseling door — een schok","De trillingen voelen wij als een aardbeving"],
          w:"Klemzitten → druk → plotseling doorschieten → trilling." },
        { t:"open", q:"Leg uit waarom in een <b>rijk</b> land bij een aardbeving meestal minder doden vallen dan in een arm land.", punten:2,
          modelantwoord:"Een rijk land heeft geld en kennis om aardbevingsbestendig te bouwen en om mensen te waarschuwen en te helpen. Daardoor storten er minder gebouwen in en vallen er minder doden.",
          sleutelwoorden:[ {moet:["rijk","geld","kennis"],syn:["welvarend"]}, {moet:["bouw","stevig","bestendig","huizen","gebouwen"],syn:["constructie"]}, {moet:["waarschuw","evacu","help","hulp"],syn:["redden"]} ],
          rubric:["Noemt geld/kennis in rijke landen","Noemt steviger bouwen of beter waarschuwen/helpen"],
          w:"Rijk land = stevig bouwen + waarschuwen → minder doden." },
        { t:"mc", q:"Waarom is het epicentrum de plek met de meeste schade?",
          o:["het ligt recht boven de beving, daar is hij het sterkst","het is het verst van de beving","daar wonen altijd de meeste mensen","daar is de grond het zachtst"], a:"het ligt recht boven de beving, daar is hij het sterkst",
          w:"Recht boven de breuk komen de trillingen het hardst aan." },
        { t:"vb", q:"Bekijk waarom een aardbeving zo plotseling komt.",
          opgave:"Vergelijking: een zware kast over de vloer",
          stappen:[
            {toon:"Je duwt zacht tegen de kast — hij beweegt niet",uitleg:"De platen zitten klem, net als de kast die blijft staan."},
            {toon:"Je blijft duwen, de druk loopt op",uitleg:"De spanning in de korst wordt steeds groter."},
            {toon:"Ineens schiet de kast een stuk vooruit",uitleg:"De korst schiet plotseling door — dat is de schok."}
          ],
          waarom:{ q:"Waarom komt een aardbeving zo plotseling?",
            o:["de druk loopt op tot de korst in één keer doorschiet","de aarde wordt langzaam zachter","de zon verwarmt de grond"],
            a:"de druk loopt op tot de korst in één keer doorschiet" } },
        { t:"mc", q:"Een beving van 7 is hoeveel keer zo sterk als een beving van 5?",
          o:["100 keer","2 keer","10 keer","20 keer"], a:"100 keer",
          w:"Elk punt = 10×. Van 5 naar 7 is twee stappen: 10 × 10 = 100×.",
          fout:{"2 keer":"de getallen schelen 2, maar de kracht gaat per punt 10× omhoog.","10 keer":"dat is maar één punt verschil; hier zijn het er twee."} }
      ] },
    { n:3, naam:"Goud",
      uitleg:[
        "Met je kennis kun je nu verschillen <b>vergelijken en beoordelen</b>: waarom beeft het ene gebied zwaarder dan het andere, en waarom is 'meer doden' iets anders dan 'meer schade in geld'."
      ],
      regel:"Zwaarte van de gevolgen hangt af van plek (plaatrand) én van het land (arm/rijk).",
      vragen:[
        { t:"open", q:"In een rijk land is de schade in geld vaak juist <b>groter</b> dan in een arm land. Leg uit hoe dat kan.", punten:2,
          modelantwoord:"In een rijk land hebben mensen meer en duurdere bezittingen, gebouwen en spullen. Als die verwoest worden, is de schade in geld dus groter — ook al vallen er vaak minder doden dan in een arm land.",
          sleutelwoorden:[ {moet:["meer","duur","duurder"],syn:["kostbaar"]}, {moet:["bezit","spullen","gebouw","huizen","eigendom"],syn:["bezittingen"]} ],
          rubric:["Noemt meer/duurdere bezittingen in rijke landen","Koppelt dat aan hogere schade in geld"],
          w:"Meer en duurdere spullen → hogere geldschade, ook al zijn er minder doden." },
        { t:"mc", q:"Twee even sterke bevingen, in een rijk en een arm land. Wat klopt meestal?",
          o:["in het arme land vallen meer doden","in het rijke land vallen meer doden","er is geen enkel verschil","in het arme land is de geldschade groter"], a:"in het arme land vallen meer doden",
          w:"Arm land = minder stevige bouw en hulp → meer slachtoffers." },
        { t:"open", q:"Aardbevingen zijn niet te voorspellen. Toch vallen er in sommige landen weinig doden. Leg uit hoe landen zich tóch kunnen voorbereiden.", punten:2,
          modelantwoord:"Ze kunnen aardbevingsbestendig bouwen, oefeningen houden, waarschuwingssystemen gebruiken en hulpdiensten klaarzetten. Zo is de schade kleiner als er tóch een beving komt.",
          sleutelwoorden:[ {moet:["bouw","bestendig","stevig"],syn:["constructie"]}, {moet:["oefen","waarschuw","hulp","plan"],syn:["voorbereiden","evacu"]} ],
          rubric:["Noemt stevig/bestendig bouwen","Noemt oefenen, waarschuwen of hulpdiensten"],
          w:"Voorbereiden kan wél, ook al is voorspellen onmogelijk." }
      ] }
  ]
},

/* ---------- 1.3 Vulkanisme ---------- */
{
  id:"vulkanisme", emoji:"🌋", titel:"1.3 Vulkanisme", paragraaf:"1.3",
  kort:"Bij plaatranden komt magma omhoog. Door de krater naar buiten = lava. Onder water bij de mid-oceanische rug ontstaat nieuwe bodem.",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "Een <b>vulkaan</b> is een opening in de aardkorst waar gesmolten gesteente, gas en as naar buiten komen. Vulkanen liggen vooral bij <b>plaatranden</b>.",
        "Diep in de aarde zit <b>magma</b>. Komt het via de <b>krater</b> naar buiten, dan heet het <b>lava</b>."
      ],
      regel:"Magma = ónder de grond. Lava = naar buiten. De opening bovenin = de krater.",
      vragen:[
        { t:"label", q:"Sleep de labels naar de juiste onderdelen van de vulkaan.", beeld:"img/vulkaan-doorsnede.svg",
          doelen:[ {id:"krater",label:"krater",x:0.5,y:0.225}, {id:"kraterpijp",label:"kraterpijp",x:0.5,y:0.5}, {id:"magmakamer",label:"magmakamer",x:0.5,y:0.8}, {id:"lavastroom",label:"lavastroom",x:0.66,y:0.47} ],
          w:"Van boven naar onder: krater → kraterpijp → magmakamer; de lava stroomt over de flank." },
        { t:"gap", q:"Gesmolten gesteente dat nog ónder de grond zit, heet ___.",
          a:"magma", w:"Magma zit onder de grond; komt het eruit, dan heet het lava." },
        { t:"mc", q:"Hoe heet gesmolten gesteente dat uit de vulkaan naar buiten komt?",
          o:["lava","magma","as","krater"], a:"lava",
          w:"Buiten de vulkaan heet het lava." },
        { t:"hotspot", q:"Klik op de krater van de vulkaan.", beeld:"img/vulkaan-doorsnede.svg",
          zones:[ {vorm:"cirkel",x:0.5,y:0.225,r:0.1} ],
          w:"De krater is de opening bovenin waar het magma naar buiten komt." },
        { t:"mc", q:"Waar liggen de meeste vulkanen?",
          o:["bij plaatranden","midden in een vlakte","op de Noordpool","in de woestijn"], a:"bij plaatranden",
          w:"Net als aardbevingen ontstaan vulkanen vooral bij plaatranden." },
        { t:"hotspot", q:"Klik op een vulkaan van de Ring of Fire (de ring rond de Stille Oceaan).", beeld:"img/ring-of-fire.svg",
          zones:[ {vorm:"cirkel",x:0.5,y:0.9,r:0.1}, {vorm:"cirkel",x:0.765,y:0.783,r:0.1}, {vorm:"cirkel",x:0.235,y:0.783,r:0.1}, {vorm:"cirkel",x:0.875,y:0.5,r:0.1}, {vorm:"cirkel",x:0.125,y:0.5,r:0.1}, {vorm:"cirkel",x:0.5,y:0.1,r:0.1}, {vorm:"cirkel",x:0.765,y:0.217,r:0.1}, {vorm:"cirkel",x:0.235,y:0.217,r:0.1} ],
          w:"De Ring of Fire is de ring van vulkanen en aardbevingen rond de Stille Oceaan." }
      ] },
    { n:2, naam:"Zilver",
      uitleg:[
        "Magma staat onder grote <b>druk</b> en wil omhoog — zoals een bal die je onder water loslaat, of de kurk van een geschudde fles. Via de krater komt het naar buiten.",
        "Midden in oceanen worden platen uit elkaar getrokken. Daar vult heet gesteente de kier en stolt in het zeewater: zo ontstaat de <b>mid-oceanische rug</b> en steeds nieuwe oceaanbodem."
      ],
      regel:"Magma onder druk wil omhoog → via de krater naar buiten als lava.",
      vragen:[
        { t:"sequence", q:"Zet op volgorde hoe een vulkaan uitbarst.",
          stappen:["Diep in de aarde zit magma onder grote druk","Het magma wil omhoog en stijgt door de kraterpijp","Via de krater komt het naar buiten","Buiten heet het lava en stroomt over de flank","Laagjes lava en as bouwen de vulkaan op"],
          w:"Druk → omhoog → krater → lava → opbouw in laagjes (als een lasagne)." },
        { t:"open", q:"Leg uit waarom magma omhoog wil. Gebruik het woord <b>druk</b>.", punten:2,
          modelantwoord:"Het magma zit diep in de aarde onder grote druk. Die druk duwt het magma omhoog, op zoek naar een uitweg — net als de kurk van een geschudde fles eruit schiet.",
          sleutelwoorden:[ {moet:["druk"],syn:["spanning"]}, {moet:["omhoog","stijg","naar boven","uitweg"],syn:["opstijgen"]} ],
          rubric:["Noemt de druk op het magma","Noemt dat die druk het magma omhoog duwt"],
          w:"Grote druk diep in de aarde duwt het magma naar boven." },
        { t:"mc", q:"Wat ontstaat er bij de mid-oceanische rug?",
          o:["nieuwe oceaanbodem","een woestijn","een tsunami","een plooiingsgebergte op het land"], a:"nieuwe oceaanbodem",
          w:"Platen gaan uit elkaar, magma vult de kier en stolt: nieuwe bodem." },
        { t:"vb", q:"Bekijk de vergelijking met een fles cola.",
          opgave:"Waarom spuit een geschudde fles eruit?",
          stappen:[
            {toon:"In de dichte fles zit gas onder druk",uitleg:"Net als magma + gas diep in de aarde."},
            {toon:"Je schudt: de druk loopt nog hoger op",uitleg:"De spanning wordt te groot."},
            {toon:"Je opent de dop: het spuit er met kracht uit",uitleg:"De druk ontsnapt — net als een vulkaanuitbarsting."}
          ],
          waarom:{ q:"Waarom past de geschudde fles bij een vulkaan?",
            o:["allebei: opgebouwde druk die er plotseling met kracht uit komt","allebei zijn ze koud","allebei maken ze regen"],
            a:"allebei: opgebouwde druk die er plotseling met kracht uit komt" } },
        { t:"mc", q:"Waarom wonen er tóch veel mensen vlak bij een vulkaan?",
          o:["de grond is er heel vruchtbaar","er is nooit gevaar","het is er altijd koel","de lava is goedkoop"], a:"de grond is er heel vruchtbaar",
          w:"Vulkanische grond is vruchtbaar, goed voor de landbouw." }
      ] },
    { n:3, naam:"Goud",
      uitleg:[
        "Een uitbarsting kondigt zich vaak aan (trillingen, rook, opzwellen, onrustige dieren). Vooral <b>rijke landen</b> kunnen met meetapparatuur op tijd waarschuwen. Het gevaarlijkst zijn gloeiend hete gaswolken (±800 °C) die met >100 km/u langs de helling razen."
      ],
      regel:"Voordelen (vruchtbare grond) en gevaren (gaswolken, lava) horen allebei bij vulkanen.",
      vragen:[
        { t:"open", q:"Bedenk een vergelijking uit het dagelijks leven die uitlegt hoe een vulkaan barst, en leg uit waarom die past.", punten:2,
          modelantwoord:"Bijvoorbeeld een geschudde fles cola of champagne: de druk loopt op en bij het openen spuit het er met kracht uit — net als magma bij een vulkaan. (Ook goed: een bal die je onder water duwt en loslaat.)",
          sleutelwoorden:[ {moet:["fles","cola","champagne","bal","ballon"],syn:["spuitbus"]}, {moet:["druk","spuit","kracht","omhoog"],syn:["spanning","eruit"]} ],
          rubric:["Geeft een passende vergelijking","Legt uit dat het om opgebouwde druk gaat die eruit komt"],
          w:"Een goede vergelijking laat 'opgebouwde druk die er plotseling uit komt' zien." },
        { t:"mc", q:"Waarom kan een rijk land de mensen vaak op tijd waarschuwen voor een uitbarsting?",
          o:["het heeft satellieten en trillingsmeters","het heeft meer vulkanen","de lava is er langzamer","de mensen wonen verder weg"], a:"het heeft satellieten en trillingsmeters",
          w:"Met meetapparatuur zie je de waarschuwingstekens op tijd." },
        { t:"open", q:"Mensen wonen graag bij een vulkaan, terwijl het gevaarlijk is. Noem een voordeel én een nadeel en geef je eigen mening.", punten:2,
          modelantwoord:"Voordeel: de grond is heel vruchtbaar, goed voor de landbouw. Nadeel: bij een uitbarsting komen lava, as en gloeiend hete gaswolken vrij, dat is levensgevaarlijk. (Mening: bijvoorbeeld dat het de moeite waard is met goede waarschuwing, of juist te gevaarlijk.)",
          sleutelwoorden:[ {moet:["vruchtbaar","landbouw","grond"],syn:["goede grond"]}, {moet:["gevaar","lava","as","gaswolk","uitbarsting"],syn:["dodelijk"]} ],
          rubric:["Noemt een voordeel (vruchtbare grond)","Noemt een nadeel (gevaar van uitbarsting) + een mening"],
          w:"Goede afweging: vruchtbare grond tegenover het gevaar van een uitbarsting." }
      ] }
  ]
},

/* ---------- 1.4 Tsunami's ---------- */
{
  id:"tsunamis", emoji:"🌊", titel:"1.4 Tsunami's", paragraaf:"1.4",
  kort:"Een zeebeving duwt het water op → golven. Bij de ondiepe kust wordt de golf hoog. Vlak ervoor trekt de zee zich terug: hét waarschuwingsteken.",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "Een <b>tsunami</b> is een enorme vloedgolf. Hij ontstaat door een sterke aardbeving in de <b>zeebodem</b>: het water krijgt een duw en er ontstaan golven.",
        "De grens waar het land aan de zee raakt heet de <b>kustlijn</b>."
      ],
      regel:"Tsunami = grote vloedgolf door een aardbeving in de zeebodem.",
      vragen:[
        { t:"mc", q:"Waardoor ontstaat een tsunami?",
          o:["door een sterke aardbeving in de zeebodem","door harde wind","door veel regen","door een volle maan"], a:"door een sterke aardbeving in de zeebodem",
          w:"De beving geeft het water een duw; daardoor ontstaan golven." },
        { t:"gap", q:"Een enorme vloedgolf die ontstaat door een zeebeving heet een ___.",
          a:"tsunami", w:"Tsunami = grote vloedgolf door een aardbeving onder zee." },
        { t:"mc", q:"Hoe zien de golven van een tsunami eruit op open zee?",
          o:["laag maar razendsnel","heel hoog en langzaam","precies zoals gewone golven","ze staan stil"], a:"laag maar razendsnel",
          w:"Op open zee zijn ze laag maar snel (honderden km/u); bij de kust worden ze hoog." },
        { t:"gap", q:"De grens waar het land aan de zee raakt, heet de ___.",
          a:"kustlijn", w:"Vlak voor een tsunami trekt de kustlijn zich soms ver terug." }
      ] },
    { n:2, naam:"Zilver",
      uitleg:[
        "Dicht bij de kust wordt het voorste water door de ondiepe bodem <b>afgeremd</b>, terwijl het achterste water doorraast en het inhaalt — de golf wordt steeds <b>hoger</b>.",
        "Vlak voor de golf trekt de zee zich soms honderden meters <b>terug</b>. Dat is hét <b>waarschuwingsteken</b>."
      ],
      regel:"Ondiep water remt de golf af → water hoopt op → de golf wordt hoog.",
      vragen:[
        { t:"sequence", q:"Zet op volgorde hoe een tsunami bij de kust ontstaat.",
          stappen:["Een sterke aardbeving in de zeebodem duwt het water op","Op open zee gaan de golven snel maar laag","Bij de ondiepe kust wordt het voorste water afgeremd","Het achterste water haalt in en de golf wordt steeds hoger","De golf slaat hoog over de kust"],
          w:"Duw → snel & laag → afremmen bij de kust → ophopen → hoge golf." },
        { t:"open", q:"Leg uit waarom een tsunamigolf bij de kust steeds hoger wordt.", punten:2,
          modelantwoord:"Bij de kust wordt het water ondiep. Daardoor wordt het voorste water afgeremd, terwijl het achterste water doorraast en het inhaalt. Het water hoopt op en de golf wordt steeds hoger.",
          sleutelwoorden:[ {moet:["ondiep","kust"],syn:["lage bodem"]}, {moet:["afgeremd","remt","traag"],syn:["langzamer"]}, {moet:["inhaalt","achterste","ophoopt","ophoop"],syn:["stapelt","achterop"]} ],
          rubric:["Noemt dat het water ondiep wordt / voorste water afremt","Noemt dat het achterste water inhaalt en ophoopt"],
          w:"Voorste water remt af, achterste haalt in → ophopen → hoog." },
        { t:"mc", q:"Wat is hét waarschuwingsteken vlak voor een tsunami?",
          o:["de zee trekt zich plotseling ver terug","de lucht wordt rood","het gaat hard regenen","de wind valt helemaal weg"], a:"de zee trekt zich plotseling ver terug",
          w:"Het water wordt als het ware opgetild vóór de golf; de kustlijn loopt weg." },
        { t:"open", q:"Tilly Smith (10 jaar) redde een vol strand in Thailand. Hoe wist zij dat er een tsunami aankwam?", punten:2,
          modelantwoord:"Ze zag de zee zich snel terugtrekken (de kustlijn liep weg). Dat is het waarschuwingsteken van een tsunami, en dat had ze in haar aardrijkskundeles geleerd. Zo waarschuwde ze de mensen op tijd.",
          sleutelwoorden:[ {moet:["zee","water","kustlijn"],syn:["zeespiegel"]}, {moet:["terug","terugtrekken","weg","wegliep"],syn:["wegtrok"]}, {moet:["les","geleerd","aardrijkskunde"],syn:["school"]} ],
          rubric:["Noemt dat de zee zich terugtrok (waarschuwingsteken)","Noemt dat ze dit uit haar les/aardrijkskunde kende"],
          w:"Terugtrekkende zee = teken; ze herkende het van school." }
      ] },
    { n:3, naam:"Goud",
      uitleg:[
        "Een tsunami geeft heel weinig tijd om te vluchten, en vaak liggen straten al vol puin van de aardbeving. Net als bij andere rampen kunnen <b>rijke landen</b> zich beter beschermen (waarschuwingssystemen, evacuatieplannen)."
      ],
      regel:"Weinig vluchttijd + puin op straat maken een tsunami extra gevaarlijk.",
      vragen:[
        { t:"open", q:"Waarom is vluchten voor een tsunami vaak zo moeilijk? Noem twee redenen.", punten:2,
          modelantwoord:"Er is heel weinig tijd: de golf komt snel na de beving. En vluchten naar hoger gelegen plekken lukt vaak slecht, omdat de straten vol puin liggen van de aardbeving die de tsunami veroorzaakte.",
          sleutelwoorden:[ {moet:["weinig tijd","snel","kort","tijd"],syn:["geen tijd"]}, {moet:["puin","straten","kapot","beving"],syn:["geblokkeerd","versperd"]} ],
          rubric:["Noemt: heel weinig tijd","Noemt: straten vol puin / wegen versperd"],
          w:"Weinig tijd én geblokkeerde vluchtwegen door puin." },
        { t:"mc", q:"Waarom kan een rijk land mensen beter beschermen tegen een tsunami?",
          o:["het heeft waarschuwingssystemen en evacuatieplannen","het heeft geen kust","de golven zijn er lager","het regent er minder"], a:"het heeft waarschuwingssystemen en evacuatieplannen",
          w:"Met waarschuwing en oefening komen mensen sneller in veiligheid." },
        { t:"open", q:"Waarom is het belangrijk dat kinderen op school leren wat het waarschuwingsteken van een tsunami is?", punten:2,
          modelantwoord:"Omdat je dan zelf het gevaar herkent (de zee die zich terugtrekt) en op tijd kunt vluchten en anderen kunt waarschuwen, zoals Tilly Smith deed. Kennis kan dus levens redden.",
          sleutelwoorden:[ {moet:["herken","weten","zien"],syn:["snap"]}, {moet:["vlucht","waarschuw","red","veilig"],syn:["op tijd weg"]} ],
          rubric:["Noemt dat je het teken dan herkent","Noemt dat je dan op tijd kunt vluchten/waarschuwen"],
          w:"Kennis van het teken → op tijd handelen → levens redden." }
      ] }
  ]
},

/* ---------- Europa: IJsland en Italië ---------- */
{
  id:"europa", emoji:"🇪🇺", titel:"Europa: IJsland en Italië", paragraaf:"Europa",
  kort:"IJsland: platen uit elkaar → lichte bevingen + vulkanisme. Italië: platen botsen → zware bevingen + vulkanen.",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "Op <b>IJsland</b> bewegen de Noord-Amerikaanse en de Euraziatische plaat <b>uit elkaar</b> (langs de Mid-Atlantische Rug). De bevingen zijn er meestal <b>licht</b>; wel veel vulkanisme.",
        "In <b>Italië</b> wringt de Afrikaanse plaat zich tégen de Euraziatische plaat: de platen <b>botsen</b>. Daardoor zijn er zowel vulkanen (Vesuvius, Etna) als <b>zware</b> aardbevingen."
      ],
      regel:"IJsland = uit elkaar (licht). Italië = botsen (zwaar).",
      vragen:[
        { t:"mc", q:"Wat gebeurt er met de platen op IJsland?",
          o:["ze bewegen uit elkaar","ze botsen op elkaar","ze staan helemaal stil","ze stapelen op elkaar"], a:"ze bewegen uit elkaar",
          w:"Op IJsland is de Mid-Atlantische Rug: platen gaan uit elkaar." },
        { t:"mc", q:"Waarom heeft Italië zware aardbevingen én vulkanen?",
          o:["de Afrikaanse plaat botst tegen Europa","het ligt ver van elke plaatrand","er is veel regen","het ligt op de Noordpool"], a:"de Afrikaanse plaat botst tegen Europa",
          w:"Botsende platen geven én vulkanisme én zware bevingen." },
        { t:"gap", q:"Op IJsland kun je tussen twee platen door duiken in de Silfrakloof, want de platen bewegen ___ elkaar.",
          a:"uit|uit elkaar|van", w:"De platen gaan uit elkaar; daartussen ontstaat een kloof." }
      ] },
    { n:2, naam:"Zilver",
      uitleg:[
        "Het verschil komt door de <b>soort plaatbeweging</b>. Bij platen die uit elkaar gaan zit er weinig 'klem', dus zijn de bevingen <b>lichter</b>. Bij botsende platen bouwt veel druk op die plotseling vrijkomt: <b>zwaardere</b> bevingen."
      ],
      regel:"Uit elkaar = weinig klem = lichte bevingen. Botsen = veel druk = zware bevingen.",
      vragen:[
        { t:"sleep", q:"Sorteer wat hoort bij platen die UIT ELKAAR gaan en wat bij platen die BOTSEN.",
          opgave:"IJsland (uit elkaar) ↔ Italië (botsen)",
          chips:[ {t:"lichte bevingen",bak:"uit"}, {t:"mid-oceanische rug",bak:"uit"}, {t:"nieuwe oceaanbodem",bak:"uit"}, {t:"zware bevingen",bak:"bots"}, {t:"plooiingsgebergte",bak:"bots"}, {t:"Afrika duwt tegen Europa",bak:"bots"} ],
          bakjes:[ {id:"uit",label:"Uit elkaar (IJsland)",som:"licht"}, {id:"bots",label:"Botsen (Italië)",som:"zwaar"} ],
          w:"Uit elkaar → licht + nieuwe korst. Botsen → zwaar + gebergte." },
        { t:"open", q:"Leg uit waarom de aardbevingen op IJsland meestal lichter zijn dan in Italië.", punten:2,
          modelantwoord:"Op IJsland bewegen de platen uit elkaar; daar zit weinig klem, dus de bevingen zijn licht. In Italië botsen de platen (Afrika tegen Europa). Daar bouwt veel druk op die plotseling vrijkomt, dus zwaardere bevingen.",
          sleutelwoorden:[ {moet:["uit elkaar","uit","weg"],syn:["divergent"]}, {moet:["bots","tegen elkaar","botsen"],syn:["convergent","duwt"]}, {moet:["druk","klem","kracht"],syn:["spanning"]} ],
          rubric:["IJsland: platen uit elkaar → weinig klem → licht","Italië: platen botsen → veel druk → zwaar"],
          w:"Soort plaatbeweging bepaalt de zwaarte van de bevingen." },
        { t:"mc", q:"Waarom is er op IJsland veel vulkanisme?",
          o:["doordat platen uit elkaar gaan, komt er magma omhoog","door de koude lucht","door de gletsjers","door toeristen"], a:"doordat platen uit elkaar gaan, komt er magma omhoog",
          w:"Waar platen uit elkaar gaan, vult magma de kier — vulkanisme." }
      ] },
    { n:3, naam:"Goud",
      uitleg:[
        "Je kunt nu twee gebieden <b>vergelijken</b> en het verschil verklaren met dezelfde regel over plaatbewegingen — en die regel toepassen op een nieuw gebied."
      ],
      regel:"Eén regel (soort plaatbeweging) verklaart de verschillen tussen gebieden.",
      vragen:[
        { t:"open", q:"Een gebied heeft veel vulkanen maar bijna alleen lichte bevingen. Bewegen de platen daar waarschijnlijk uit elkaar of botsen ze? Leg uit.", punten:2,
          modelantwoord:"Waarschijnlijk bewegen de platen daar uit elkaar (zoals op IJsland). Dan komt er magma omhoog (vulkanisme), maar zit er weinig klem, dus zijn de bevingen licht.",
          sleutelwoorden:[ {moet:["uit elkaar","uit","weg"],syn:["divergent"]}, {moet:["magma","vulkaan","vulkanisme","omhoog"],syn:["lava"]}, {moet:["licht","weinig klem","weinig druk"],syn:["zwak"]} ],
          rubric:["Concludeert: platen uit elkaar","Legt uit met magma omhoog + weinig klem = licht"],
          w:"Veel vulkanisme + lichte bevingen past bij platen die uit elkaar gaan." },
        { t:"mc", q:"Welke uitspraak over Italië klopt?",
          o:["botsende platen geven er én vulkanen én zware bevingen","de platen staan er stil","er zijn alleen lichte bevingen","er zijn geen vulkanen"], a:"botsende platen geven er én vulkanen én zware bevingen",
          w:"Afrika botst tegen Europa: vulkanisme én zware bevingen." }
      ] }
  ]
},

/* ---------- 1.5 Nederland op reis ---------- */
{
  id:"nederland-reis", emoji:"🧭", titel:"1.5 Nederland op reis", paragraaf:"1.5",
  kort:"Nederland ligt op een plaat en is in miljoenen jaren verschoven. Steenkool, zout en fossielen bewijzen dat het ooit ergens anders lag.",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "Ook Nederland ligt op een plaat en beweegt mee. Lang geleden lag het stukje aardkorst van Nederland dicht bij de <b>evenaar</b>. In miljoenen jaren heeft het een hele reis gemaakt.",
        "De wetenschap die de aarde bestudeert heet <b>geologie</b>. Met de <b>geologische tijdschaal</b> verdeel je de geschiedenis in tijdvakken."
      ],
      regel:"Nederland is met de plaat meegereisd; bewijs zit in de bodem.",
      vragen:[
        { t:"mc", q:"Hoe weten we hoe de aarde is ontstaan en waar Nederland vroeger lag?",
          o:["dankzij de geologie","dankzij de sterrenkunde","dankzij de wiskunde","dat weten we niet"], a:"dankzij de geologie",
          w:"Geologie bestudeert het ontstaan en de opbouw van de aarde." },
        { t:"gap", q:"Een versteend overblijfsel of afdruk van een plant of dier heet een ___.",
          a:"fossiel", w:"Fossielen laten zien welke soorten in welk tijdvak leefden." },
        { t:"mc", q:"Wat bewijst dat Nederland vroeger heel ergens anders lag?",
          o:["steenkool, zout en fossielen in de bodem","de naam van het land","de Nederlandse taal","de vlag"], a:"steenkool, zout en fossielen in de bodem",
          w:"De bodem bewaart sporen van het oude klimaat en de oude ligging." }
      ] },
    { n:2, naam:"Zilver",
      uitleg:[
        "Het bewijs zit in de bodem: <b>steenkool</b> (uit tropische moerassen → Nederland lag bij de evenaar), <b>zout</b> (uit een ingedampte warme binnenzee → droge woestijnzone), en <b>fossielen</b> (laten zien welke dieren wanneer leefden)."
      ],
      regel:"Steenkool → tropen; zout → warme, droge zee; fossielen → welk tijdvak.",
      vragen:[
        { t:"sleep", q:"Sorteer welk bewijs bij welke oude omgeving van Nederland hoort.",
          opgave:"Wat vertelt de bodem?",
          chips:[ {t:"steenkool",bak:"tropen"}, {t:"tropisch moeras",bak:"tropen"}, {t:"zout",bak:"woestijn"}, {t:"ingedampte binnenzee",bak:"woestijn"} ],
          bakjes:[ {id:"tropen",label:"Warm & nat (bij de evenaar)",som:"steenkool"}, {id:"woestijn",label:"Warm & droog (woestijnzone)",som:"zout"} ],
          w:"Steenkool = tropisch moeras; zout = ingedampte warme zee." },
        { t:"open", q:"Leg uit waarom <b>steenkool</b> in de Limburgse bodem bewijst dat Nederland ooit bij de evenaar lag.", punten:2,
          modelantwoord:"Steenkool ontstaat uit planten in warme, natte tropische moerassen. Die groeien alleen dicht bij de evenaar. Omdat er steenkool in de bodem zit, moet Nederland daar vroeger dus gelegen hebben.",
          sleutelwoorden:[ {moet:["plant","moeras","bos"],syn:["veen"]}, {moet:["tropisch","warm","evenaar"],syn:["tropen"]} ],
          rubric:["Noemt dat steenkool uit planten/moeras ontstaat","Koppelt dat aan een warm/tropisch klimaat bij de evenaar"],
          w:"Steenkool = tropische plantenresten → Nederland lag bij de evenaar." },
        { t:"mc", q:"Waarvoor gebruik je de geologische tijdschaal?",
          o:["om de geschiedenis van de aarde in tijdvakken te verdelen","om het weer te voorspellen","om de tijd op je horloge te zetten","om afstanden te meten"], a:"om de geschiedenis van de aarde in tijdvakken te verdelen",
          w:"Het is de 'kalender' van de aarde, bv. het Krijt met de dinosauriërs." }
      ] },
    { n:3, naam:"Goud",
      uitleg:[
        "Met dit soort bodembewijs kun je <b>redeneren</b> over het verleden: uit wat je in de grond vindt, leid je af welk klimaat en welke ligging er vroeger was."
      ],
      regel:"Uit bodemvondsten leid je het oude klimaat en de oude ligging af.",
      vragen:[
        { t:"open", q:"In de bodem van een land wordt dik <b>zout</b> gevonden. Wat zegt dat over het klimaat dat daar vroeger was? Leg uit.", punten:2,
          modelantwoord:"Zout ontstaat als een ondiepe zee indampt. Dat gebeurt in een warm en droog klimaat (woestijnzone). Dus dat land lag vroeger waarschijnlijk in een warm, droog gebied waar een binnenzee kon indampen.",
          sleutelwoorden:[ {moet:["indamp","verdamp","droog"],syn:["opdroog"]}, {moet:["warm","woestijn"],syn:["heet"]}, {moet:["zee","binnenzee","water"],syn:["meer"]} ],
          rubric:["Noemt dat zout door indampen/verdampen van zeewater ontstaat","Koppelt dat aan een warm, droog klimaat"],
          w:"Zout = ingedampte zee → warm en droog klimaat." },
        { t:"mc", q:"Je vindt in diepe aardlagen fossielen van dinosauriërs (het Krijt). Wat kun je daaruit afleiden?",
          o:["hoe oud die laag ongeveer is","hoe warm het morgen wordt","hoe diep de zee nu is","hoe hoog de bergen worden"], a:"hoe oud die laag ongeveer is",
          w:"Fossielen verraden uit welk tijdvak een laag komt." }
      ] }
  ]
},

/* ---------- 1.6 Tektoniek in Nederland ---------- */
{
  id:"groningen", emoji:"⛽", titel:"1.6 Tektoniek in Nederland", paragraaf:"1.6",
  kort:"Nederland ligt ver van een plaatrand → weinig natuurgeweld. Tóch bevingen in Groningen: door gaswinning zakt de bodem schoksgewijs langs breuklijnen.",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "Nederland ligt <b>ver van een plaatrand</b>. Daarom hebben we hier weinig last van botsende platen: geen plooiingsgebergten, nauwelijks natuurlijke aardbevingen, en we liggen beschut tegen tsunami's.",
        "Tóch zijn er aardbevingen in <b>Groningen</b> — maar die komen door de <b>mens</b>: door het oppompen van aardgas."
      ],
      regel:"Ver van de plaatrand = weinig natuurgeweld. Groningen-bevingen = door gaswinning.",
      vragen:[
        { t:"mc", q:"Waarom heeft Nederland bijna geen natuurlijke aardbevingen, vulkanen of tsunami's?",
          o:["het ligt ver van een plaatrand","het is een klein land","het ligt aan zee","er wonen veel mensen"], a:"het ligt ver van een plaatrand",
          w:"Natuurgeweld ontstaat vooral op plaatranden; daar ligt Nederland niet." },
        { t:"mc", q:"Waardoor komen de aardbevingen in Groningen?",
          o:["door het winnen van aardgas","door een vulkaan","door botsende platen","door de zee"], a:"door het winnen van aardgas",
          w:"Door gaswinning zakt de bodem en schokt hij langs breuklijnen." },
        { t:"gap", q:"Door het oppompen van gas ontstaat lege ___ en zakt de bodem in.",
          a:"ruimte|holte", w:"De lege ruimte zakt schoksgewijs in langs breuklijnen." }
      ] },
    { n:2, naam:"Zilver",
      uitleg:[
        "Door het aardgas op te pompen ontstaat <b>lege ruimte</b> en zakt de bodem in. Dat gaat niet gelijkmatig: langs <b>breuklijnen</b> verschuift de korst schoksgewijs. Die schokken voelen bewoners als aardbevingen."
      ],
      regel:"Gas eruit → lege ruimte → bodem zakt schoksgewijs langs breuklijnen → bevingen.",
      vragen:[
        { t:"sequence", q:"Zet op volgorde hoe de aardbevingen in Groningen ontstaan.",
          stappen:["Er wordt aardgas uit de bodem gepompt","Er ontstaat lege ruimte in de ondergrond","De bodem zakt in","Dat gaat schoksgewijs langs breuklijnen","Bewoners voelen die schokken als aardbevingen"],
          w:"Gas eruit → lege ruimte → inzakken → schok langs breuklijn → beving." },
        { t:"open", q:"Leg in je eigen woorden uit hoe de aardbevingen in Groningen ontstaan. Gebruik <b>aardgas</b>, <b>ruimte/inzakken</b> en <b>breuklijn</b>.", punten:3,
          modelantwoord:"Er is aardgas uit de bodem gehaald. Daardoor ontstaat lege ruimte en zakt de bodem in. Dat gaat schoksgewijs langs breuklijnen, en die schokken voelen de mensen als aardbevingen.",
          sleutelwoorden:[ {moet:["aardgas","gas"],syn:["gaswinning"]}, {moet:["ruimte","inzak","zakt","holte"],syn:["leeg","daalt"]}, {moet:["breuklijn","breuk"],syn:["scheur"]} ],
          rubric:["Noemt: aardgas eruit gehaald","Noemt: lege ruimte / bodem zakt in","Noemt: schoksgewijs langs breuklijnen"],
          w:"Aardgas → lege ruimte/inzakken → schok langs breuklijn." },
        { t:"mc", q:"Wat is een verschil tussen de bevingen in Groningen en die in Italië?",
          o:["Groningen komt door de mens, Italië door botsende platen","ze zijn precies hetzelfde","Groningen komt door een vulkaan","Italië komt door gaswinning"], a:"Groningen komt door de mens, Italië door botsende platen",
          w:"Groningen = menselijke oorzaak; Italië = natuurlijke platentektoniek." }
      ] },
    { n:3, naam:"Goud",
      uitleg:[
        "Rond de gaswinning is veel <b>discussie</b>. Je kunt nu argumenten vóór en tegen afwegen en je eigen mening onderbouwen — een echte aardrijkskunde-vaardigheid."
      ],
      regel:"Bij een vraagstuk als gaswinning weeg je voordelen, nadelen en meningen af.",
      vragen:[
        { t:"open", q:"Noem één argument vóór en één argument tegen de gaswinning in Groningen, en geef je eigen mening.", punten:2,
          modelantwoord:"Vóór: aardgas levert veel geld op en stoot minder CO₂ uit dan olie of steenkool. Tegen: het geeft schade en gevaar voor bewoners en hun huizen dalen in waarde. (Mening: bijvoorbeeld stoppen omdat de veiligheid van bewoners voorgaat.)",
          sleutelwoorden:[ {moet:["geld","co2","co₂","energie"],syn:["inkomsten","schoner"]}, {moet:["schade","gevaar","scheuren","waarde","onveilig"],syn:["bevingen","kapot"]} ],
          rubric:["Noemt een argument vóór (geld / minder CO₂)","Noemt een argument tegen (schade/gevaar) + een mening"],
          w:"Goede afweging: geld/energie tegenover veiligheid en schade." },
        { t:"mc", q:"Waarom blijven er ook ná het stoppen van de gaswinning nog een tijd bevingen?",
          o:["de bodem moet zich nog 'zetten'","er wordt stiekem doorgepompt","er komt een vulkaan","door de zee"], a:"de bodem moet zich nog 'zetten'",
          w:"De ingezakte bodem komt nog na tot rust; daarom blijft er even bevingsgevaar." }
      ] }
  ]
}
];

/* ============================ BEGRIPPEN ============================ */
/* item = [definitie (voorkant), begrip (typ dit)] — flashcards + spaced repetition */
window.BEGRIPPEN = {
  "kern-1-1":{ emoji:"🧩", titel:"Begrippen 1.1 — Aardkorst", paragraaf:"1.1", items:[
    ["Het binnenste, erg hete deel van de aarde","aardkern"],
    ["Het buitenste laagje van de aarde, dat uit losse platen bestaat","aardkorst"],
    ["De gloeiend hete, stroperige laag tussen korst en kern","aardmantel"],
    ["Stukken aardkorst die over de aardmantel bewegen","platen"],
    ["Het heel langzaam bewegen van de aardplaten","platentektoniek"],
    ["Gebergte dat ontstaat doordat gesteentelagen worden samengeperst en omhooggeduwd","plooiingsgebergte"],
    ["Het enorme continent waarin vroeger alle continenten samen zaten (Pangaea)","supercontinent"]
  ]},
  "kern-1-2":{ emoji:"🌐", titel:"Begrippen 1.2 — Aardbevingen", paragraaf:"1.2", items:[
    ["Trilling die ontstaat door een plotselinge verschuiving van de aardkorst","aardbeving"],
    ["Het punt aan de oppervlakte recht boven de beving; daar is hij het sterkst","epicentrum"],
    ["De schaal waarmee je de kracht van een aardbeving meet","schaal van Richter"]
  ]},
  "kern-1-3":{ emoji:"🌋", titel:"Begrippen 1.3 — Vulkanisme", paragraaf:"1.3", items:[
    ["Plaats waar vloeibaar gesteente uit de aarde naar buiten komt","vulkaan"],
    ["Gesmolten gesteente dat nog in/onder de aarde zit","magma"],
    ["Vloeibaar gesteente dat bij een uitbarsting naar buiten komt","lava"],
    ["De opening bovenin de vulkaan waar het magma naar buiten komt","krater"],
    ["Onderzeese bergketen waar platen uit elkaar bewegen en nieuwe bodem ontstaat","mid-oceanische rug"]
  ]},
  "kern-1-4":{ emoji:"🌊", titel:"Begrippen 1.4 — Tsunami's", paragraaf:"1.4", items:[
    ["Grote vloedgolf die ontstaat door een aardbeving in de zeebodem","tsunami"],
    ["De grens waar het land aan de zee raakt","kustlijn"]
  ]},
  "kern-1-5":{ emoji:"🦕", titel:"Begrippen 1.5 — Nederland op reis", paragraaf:"1.5", items:[
    ["De wetenschap die het ontstaan en de opbouw van de aarde bestudeert","geologie"],
    ["Een versteend overblijfsel of afdruk van een plant of dier","fossiel"],
    ["De ontwikkeling van planten en dieren in heel lange tijd","evolutie van het leven"],
    ["De 'kalender' van de aarde, die de geschiedenis in tijdvakken verdeelt","geologische tijdschaal"]
  ]},
  "topo":{ emoji:"🗺️", titel:"Topografie & plaatsen", paragraaf:"topo", items:[
    ["Plooiingsgebergte tussen Italië en de rest van Europa","Alpen"],
    ["Plooiingsgebergte langs de westkust van Zuid-Amerika","Andes"],
    ["Ring van vulkanen en aardbevingen rond de Stille Oceaan","Ring of Fire"],
    ["Eiland waar de platen uit elkaar bewegen (Mid-Atlantische Rug)","IJsland"],
    ["Land waar de Afrikaanse plaat tegen Europa botst (Vesuvius, Etna)","Italië"],
    ["Nederlandse provincie met aardbevingen door gaswinning","Groningen"]
  ]}
};

/* ============================ AANMOEDIGING ============================ */
window.AANMOEDIGING = {
  goed:["Goed zo! 🎉","Yes! 💪","Top, Storm!","Helemaal goed! ⭐","Lekker bezig!","Knap gedaan! 🌟"],
  bijna:["Bijna! Kijk even mee.","Net niet — geen probleem!","Oei, bijna goed.","Dat is lastig, hè?"],
  levelup:["Wow, niveau omhoog! 🏅","Je snapt het — moeilijker mag nu!","Knap! Op naar het volgende niveau! 🚀"],
  leveldown:["Geeft niks — we oefenen dit rustig nog een keer. 💛","Even een stapje terug, dan zit het straks vast.","Geen stress, we pakken het samen opnieuw."],
  stapelklaar:["Stapel gehaald! 🎉 Op naar de volgende.","Alles gekend — top!","Yes, stapeltje af! ⭐"]
};
