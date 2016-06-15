// GeoLocation && Google Maps
function initMap() {
	// Vars
	var directionsService = new google.maps.DirectionsService();
	var directionsDisplay = new google.maps.DirectionsRenderer();
	var position = {lat: -12, lng: -54};
	var map = new google.maps.Map(document.getElementById('mapa'), {
		center: position,
		zoom: 8,
		scrollwheel: false,
		mapTypeControl: true,
	});
	console.log('até aqui ja foi')
	var imageLocation = 'http://analiseme.com/teste_omron/gm/marker-user.png';
	var image = 'http://analiseme.com/teste_omron/gm/marker.png';
	var points = [
		[-22.967923,-43.185044,16,"Afim Comercio E Servicos De Imunizacao - Copacabana","(21) 2256-3843",null,"R. Barata Ribeiro, 370 - Copacabana, Rio de Janeiro - RJ",""],
		[-22.8731549,-43.3390984,16,"Alergo - Ar","(21) 3359-4384",null,"Estr. do Portela, 99 - Madureira, Rio de Janeiro - RJ",""],
		[-22.8945404,-43.1189106,16,"Alergo - Ar","(21) 2622-1254",null,"R. da Conceição, 188 - Centro, Niterói - RJ",""],
		[-22.9261573,-43.2331434,16,"Alergo - Ar","(21) 2288-2188",null,"R. Des. Izidro, 22 - Tijuca, Rio de Janeiro - RJ",""],
		[-22.9051027,-43.178263,16,"Alergo - Ar","(21) 2224-1594",null,"R. Sete de Setembro, 92 - Centro, Rio de Janeiro - RJ",""],
		[-15.7783917,-47.8885679,16,"Alergo Vaccine","(61) 3345-8001",null,"Shcgn - Brasília, Brasília - DF",""],
		[-15.8199433,-47.9144586,16,"Alergo Vacine - Vacina Para Crianças, Adolescentes E Adultos","(61) 3345-8001",null,"BL D - Asa Sul, Brasília - DF",""],
		[-5.7792569,-35.200916,16,"Ami Vacina (mirassol)","(84) 3206-9527",null,"Natal, Natal - RN",""],
		[-5.8007436,-35.2028684,16,"Ami Vacina (tirol)","(84) 3611-2308",null,"R. Joaquim Fagundes, 700 - Barro Vermelho, Natal - RN",""],
		[-19.7558279,-47.9160085,16,"Amo Prevenir Clínica De Vacinação","(34) 3334-3533",null,"Av. Leopoldino de Oliveira, 1247 - Estados Unidos, Uberaba - MG",""],
		[-23.321113,-51.1574781,16,"Baldy - Clínica De Imunizações","(43) 3323-2410",null,"R. Sen. Souza Naves, 979 - Centro, Londrina - PR",""],
		[-26.296362,-48.844738,16,"Bambini Pronto Atendimento Pediátrico","(47) 3423-2000",null,"R. Tijucas, 294 - América, Joinville - SC",""],
		[-13.8590592,-40.0837763,16,"Biovacina Clínica De Vacinação","(73) 3525-9620",null,"Jequié, Jequié - BA",""],
		[-23.5265497,-47.464788,16,"Bozelli Medicina E Saúde Sc Ltda","(15) 3414-5400",null,"R. Maria Soares Leitão, 21 - Parque Campolim, Sorocaba - SP",""],
		[-23.5265497,-47.464788,16,"Bozelli Medicina E Saúde Sc Ltda","(15) 3414-5400",null,"R. Maria Soares Leitão, 21 - Parque Campolim, Sorocaba - SP",""],
		[-26.9442144,-48.6399651,16,"Bravacinas","(47) 3344-0082",null,"Av. Osvaldo Reis, 3547 - Praia Brava, Itajaí - SC",""],
		[-22.9003071,-43.1118134,16,"Byo Terapia Imunobiológica Assistida Imunização Ltda.","(21) 3619-9519",null,"Rua Mem de Sá, 19 - Icaraí, Niterói - RJ",""],
		[-23.4282256,-51.9567189,16,"Casa Da Vacina","(44) 3262-1425",null,"Av. Rio Branco, 833 - Zona 05, Maringá - PR",""],
		[-23.5716985,-46.6563352,16,"Cedipi","(11) 3887-6111",null,"Alameda Joaquim Eugênio de Lima, 1338 - Jardins, São Paulo - SP",""],
		[-16.6917074,-49.2663559,16,"Cedipi","(62) 3281-5544",null,"R. 9, 1446 - St. Marista, Goiânia - GO",""],
		[-23.5716985,-46.6563352,16,"Cedipi - Clínica Especializada Em Doenças Infecciosas E Parasitárias E Em Imunizações","(11) 3887-6111",null,"Alameda Joaquim Eugênio de Lima, 1338 - Jardins, São Paulo - SP",""],
		[-25.4339447,-49.2691322,16,"Centro De Diagnostico Paciornik","( ) 41301-59898",null,"R. Lourenço Pinto, 65 - Centro, Curitiba - PR",""],
		[-23.6172902,-46.6756529,16,"Centro De Imunização E Apoio Terapêutico - Ciat","(11) 5041-1248",null,"Av. Ver. José Diniz, 3457 - Brooklin Paulista, São Paulo - SP",""],
		[-23.5701839,-46.6442269,16,"Centro De Imunização Pro Matre Paulista","(11) 3287-5000",null,"R. Cincinato Braga, 37 - Bela Vista, São Paulo - SP",""],
		[-23.5885349,-46.6644743,16,"Centro De Imunização Santa Joana","(11) 3887-6950",null,"Av. República do Líbano, 900 - Moema, São Paulo - SP",""],
		[-23.5701839,-46.6442269,16,"Centro De Imunizações Santa Joana","(11) 3284-8824",null,"R. Cincinato Braga, 37 - Bela Vista, São Paulo - SP",""],
		[-23.5885349,-46.6644743,16,"Centro De Imunizações Santa Joana","(11) 3887-6950",null,"Av. República do Líbano, 900 - Moema, São Paulo - SP",""],
		[-12.885704,-38.2978155,16,"Centro De Vacinas Louis Pasteur","(71) 3289-6000",null,"R. Praia de Pajussara, 111 - Vilas do Atlantico, Lauro de Freitas - BA",""],
		[-12.9780024,-38.4547378,16,"Centro De Vacinas Louis Pasteur","(71) 3289-6000",null,"Av. Tancredo Neves, 2915 - Caminho das Árvores, Salvador - BA",""],
		[-25.4456845,-49.2760337,16,"Centro De Vacinas Pequeno Príncipe","(41) 3310-1141",null,"Rua Desembargador Motta, 913 - Água Verde, Curitiba - PR",""],
		[-23.2008091,-45.8890281,16,"Centro De Vacinas Pró-infância","(12) 3922-7866",null,"Av. Eng. Francisco José Longo, 862 - Jardim Sao Dimas, São José dos Campos - SP",""],
		[-23.6003484,-46.7155194,16,"Centro Imunização Hosp. Albert Einstein","(11) 2151-2255",null,"Unidade Morumbi - São Paulo - Av. Albert Einstein, 627 - Jardim Leonor, São Paulo - SP",""],
		[-22.9222235,-43.3710068,16,"Centro Médico Americo Fadda","(21) 2423-1440",null,"Av. Nelson Cardoso, 1149 - Taquara, Rio de Janeiro - RJ",""],
		[-23.4257281,-51.9474038,16,"Centrovac Centro De VacinacÃo","(44) 3025-6393",null,"Av. Tiradentes, 1455 - Zona 01, Maringá - PR",""],
		[-25.4305948,-49.2839648,16,"Cevacine - Centro De Vacinação E Imunização De Curitiba Ltda.","(41) 3322-9696",null,"R. Brg. Franco, 974 - Mercês, Curitiba - PR",""],
		[-25.4305948,-49.2839648,16,"Cevacine Centro De VacinaÇÃo","(41) 3322-9696",null,"R. Brg. Franco, 974 - Mercês, Curitiba - PR",""],
		[-22.8411336,-42.1023917,16,"Cia à Saúde - Clínica De Vacinas","(22) 2621-3159",null,"R. Rita Pereira, 63 - Centro, São Pedro da Aldeia - RJ",""],
		[-30.0225344,-51.195625,16,"Cia De Vacinas","(51) 3343-8002",null,"R. 24 de Outubro, 1312 - Independência, Porto Alegre - RS",""],
		[-23.6172902,-46.6756529,16,"Ciat - Centro De Imunização","(11) 5041-1248",null,"Av. Ver. José Diniz, 3457 - Brooklin Paulista, São Paulo - SP",""],
		[-23.1838612,-46.8975386,16,"Clemed - JundiaÍ","(11) 4521-3633",null,"R. Diógenes Duarte Paes, 150 - Parque do Colégio, Jundiaí - SP",""],
		[-23.1838612,-46.8975386,16,"Clemed - Vacinas","(11) 4521-3633",null,"R. Diógenes Duarte Paes, 150 - Parque do Colégio, Jundiaí - SP",""],
		[-23.615852,-46.6759475,16,"Cliap","(11) 5090-0100",null,"R. Dr. Jesuíno Maciel, 345 - Campo Belo, São Paulo - SP",""],
		[-23.615852,-46.6759475,16,"Cliap","(11) 5090-0100",null,"R. Dr. Jesuíno Maciel, 345 - Campo Belo, São Paulo - SP",""],
		[-23.6220296,-46.6720199,16,"Cliap - Centro De Imunizações","(11) 5090-0100",null,"Campo Belo, São Paulo - State of São Paulo",""],
		[-15.7942287,-47.8821658,16,"Clidip - Hospital -dia, Infectologia E Vacinas","(61) 3442-8186",null,"Brasília - Brasiliaia - Federal District",""],
		[-1.4548526,-48.4880997,16,"Climep","(91) 3181-1644",null,"Av. Cmte. Brás de Águiar, 410 - Nazaré, Belém - PA",""],
		[-19.9243601,-43.9233897,16,"Climep Vacinas","(31) 3241-4644",null,"R. Álvares Maciel, 391 - Santa Efigênia, Belo Horizonte - MG",""],
		[-16.6930987,-49.2607979,16,"Climipi Infectologia E Imunizações","(62) 3281-3608",null,"R. 147, 241 - St. Marista, Goiânia - GO",""],
		[-16.6930987,-49.2607979,16,"Climipi Vacinas","(62) 3281-3608",null,"R. 147, 241 - St. Marista, Goiânia - GO",""],
		[-15.798671,-48.0535327,16,"Climune Pediatria E Vacinação","(61) 3351-1014",null,"R. 10 - Taguatinga Norte, Brasília - DF",""],
		[-23.5068724,-46.6274415,16,"Climuni","(11) 2221-3058",null,"R. Felipe Gadelha, 126 - Santana, São Paulo - SP",""],
		[-23.5981936,-46.8479803,16,"Clin - Clínica De Pediatria E Vacinação Granja Vianna","(11) 4702-3061",null,"Av. Eid Mansur, 753 - Parque Sao George, Cotia - SP",""],
		[-8.0601694,-34.898833,16,"Clínica Angelina Maia","(81) 3221-2927",null,"Rua Viscondessa do Livramento, 100 - Derby, Recife - PE",""],
		[-19.9352486,-43.9257927,16,"Clínica Auge Centro De Infusões E Vacinas","(31) 2551-1510",null,"R. Cláudio Manoel, 36 - Funcionários, Belo Horizonte - MG",""],
		[-26.9117355,-48.6544537,16,"Clínica Curumim Médica S\/c Ltda.","(47) 3349-3101",null,"R. Lauro Muller, 750 - Centro, Itajaí - SC",""],
		[-25.5483653,-54.5838302,16,"Clínica De Imunização De Foz Do Iguaçu","(45) 3523-4757",null,"Rua Belarmino de Mendonça, 588 - Centro, Foz do Iguaçu - PR",""],
		[-24.9618429,-53.4545358,16,"Clínica De Imunizações De Cascavel","(45) 3324-0091",null,"R. Maranhão, 483 - Centro, Cascavel - PR",""],
		[-23.321113,-51.1574781,16,"Clínica De Imunizações De Londrina","(43) 3323-2410",null,"R. Sen. Souza Naves, 979 - Centro, Londrina - PR",""],
		[-23.4273103,-51.9539938,16,"Clínica De Imunizações De Maringá","(44) 3262-1425",null,"Av. Rio Branco - Zona 05, Maringá - PR",""],
		[-25.4146953,-49.2868119,16,"Clínica De Imunizações Do Paraná","(41) 3024-4020",null,"R. Dr. Roberto Barrozo, 1834 - Centro Cívico, Curitiba - PR",""],
		[-3.7352624,-38.5001482,16,"Clínica De Vacinação Dra. Núbia Jacó","(85) 3133-5853",null,"R. Osvaldo Cruz, 1089 - Meireles, Fortaleza - CE",""],
		[-19.9274749,-43.9507902,16,"Clínica De Vacinação Hospital Materdei","(31) 3339-9010",null,"Av. Barbacena, 1067 - Barro Preto, Belo Horizonte - MG",""],
		[-3.7338386,-38.5237506,16,"Clínica De Vacinação Imunize Ltda.","(85) 3226-1086",null,"Av. Heráclito Graça, 100 - Centro, Fortaleza - CE",""],
		[-21.2403432,-44.996995,16,"Clínica De Vacinação Lavras","(35) 3821-9211",null,"R. Comendador José Esteves, 693 - Dos Ipês, Lavras - MG",""],
		[-23.7848728,-53.0729835,16,"Clínica De Vacinas & Imunoterapia Alérgica","(44) 3676-3484",null,"Av. Brasil, 2623, Cruzeiro do Oeste - PR",""],
		[-23.5015299,-47.4525603,16,"Clínica De Vacinas Do Instituto Da Infância","(15) 3234-2499",null,"Sorocaba, Sorocaba - SP",""],
		[-30.0326937,-51.1782327,16,"Clínica De Vacinas Mãe De Deus Center","(51) 3378-9802",null,"Av. Soledade, 569 - Petrópolis, Porto Alegre - RS",""],
		[-22.8916256,-48.4470807,16,"Clínica Dra. Elaine Gagete Miranda Da Silva - Vaccinare Botucatu","(14) 3815-2915",null,"R. Dr. Rodrigues do Lago, 398 - Centro, Botucatu - SP",""],
		[-23.6088341,-46.6670847,16,"Clinica Geriatria Christiane Hedaya","(11) 3564-7400",null,"Indianópolis, São Paulo - State of São Paulo",""],
		[-22.9672951,-47.0049315,16,"Clínica Imunity","(19) 3829-1702",null,"Av. Onze de Agosto, 1980 - Vila Embare, Valinhos - SP",""],
		[-23.6370141,-46.6992622,16,"Clínica Infantil Santa Isabella","(11) 5189-9947",null,"R. Verbo Divino, 246 - Chacara Santo Antonio (Zona Sul), São Paulo - SP",""],
		[-22.0120857,-47.8997038,16,"Clínica Infantil Scalli S\/s","(16) 3413-4984",null,"R. Vítor Manoel Souza Lima, 570 - Jardim Bethania, São Carlos - SP",""],
		[-27.5903645,-48.5503917,16,"Clínica Infantil Tio Cecim","(48) 3211-5582",null,"Vila Ten. Sapucáia, 66 - Centro, Florianópolis - SC",""],
		[-24.3239187,-47.0014428,16,"Clínica Interped","(13) 3455-2732",null,"Av. Santos Dumont, 110 - Centro, Peruíbe - SP",""],
		[-22.8872808,-47.0655873,16,"Clinica Lane","(19) 3202-0155",null,"Condomínio Clínica Lane - R. Eduardo Lane, 200 - Guanabara, Campinas - SP",""],
		[-25.439957,-49.2943488,16,"Clinica Med Amparo","(41) 3015-8880",null,"Av. Vicente Machado, 1880 - Centro, Curitiba - PR",""],
		[-23.1068802,-45.7074045,16,"Clínica Médica Vili Ltda.","(12) 3652-6661",null,"R. Cel. João Dias Guimarães, 525 - Vila Sao Joao, Caçapava - SP",""],
		[-30.0102411,-51.1489414,16,"Clinica Multivacinas","(51) 3028-2585",null,"Av. Assis Brasil, 3940 - Passo d'Areia, Porto Alegre - RS",""],
		[-8.7616136,-63.9061587,16,"Clínica Porto Velho","(69) 3224-2941",null,"Caiari, Porto Velho - RO",""],
		[-23.0007698,-43.3427439,16,"Clínica Prevcenter Unidade Barra","(21) 3326-2106",null,"Av. das Américas, 3255 - Barra da Tijuca, Rio de Janeiro - RJ",""],
		[-22.984086,-43.2025127,16,"Clínica Prevcenter Unidade Ipanema","(21) 2523-5636",null,"R. Visc. de Pirajá, 260 - Ipanema, Rio de Janeiro - RJ",""],
		[-22.8936182,-47.0692461,16,"Clínica Previna","(19) 3242-6742",null,"R. Camargo Paes, 279 - Jardim Guanabara, Campinas - SP",""],
		[-21.7626682,-41.3184501,16,"Clínica Pró - Vacina","( ) 22272-28707",null,"Campos, Campos dos Goytacazes - State of Rio de Janeiro",""],
		[-25.4444178,-49.2881057,16,"Clinica Proteção Vacinas","(41) 3342-8705",null,"Batel, Curitiba - State of Paraná",""],
		[-25.4309279,-49.2578898,16,"Clinica Pulmonar","(41) 3027-2525",null,"R. da Paz, 195 - Centro, Curitiba - PR",""],
		[-27.6153293,-48.5891986,16,"Clinica Santa Helena - Clinica De Vacinas","(48) 3227-4474",null,"R. Álvaro Soares de Oliveira, 117 - Itaguaçu, Florianópolis - SC",""],
		[-7.226118,-39.3193269,16,"Clínica Saúde E Vacina Ltda.","(88) 3512-3040",null,"Romeirao, Juazeiro do Norte - CE",""],
		[-27.5945212,-48.5513776,16,"Clínica Tio Cecim - Clínica Pediátrica","(48) 3211-5582",null,"R. Jerônimo Coelho, 383 - Centro, Florianópolis - SC",""],
		[-16.6880981,-49.2497928,16,"Clinica Ymune","(62) 3096-6262",null,"R. 86, 368 - St. Sul, Goiânia - GO",""],
		[-26.3073781,-48.8467744,16,"Clinigem Vacinas E Consultoria Em Saúde Ltda","(47) 3433-0093",null,"R. Min. Calógeras, 708 - Bucarein, Joinville - SC",""],
		[-23.5496634,-46.5573338,16,"Clinivac","(11) 3845-1655",null,"R. Passos Ourique, 2 - Tatuapé, São Paulo - SP",""],
		[-23.5906693,-46.6747287,16,"Clinivac - Centro De Vacinação \/ Itaim","(11) 3845-1655",null,"R. Dr. Alceu de Campos Rodrigues, 258 - Vila Nova Conceição, São Paulo - SP",""],
		[-23.5352452,-46.575463,16,"Clinivac - Centro De Vacinação \/ Tatuapé","(11) 2093-6880",null,"Tatuapé, São Paulo - State of São Paulo",""],
		[-23.5497626,-46.557259,16,"Clinivac - Clínica Pediatrica Ltda.","(11) 2093-6880",null,"R. Francisco Marengo, 1429 - Tatuapé, São Paulo - SP",""],
		[-23.5906693,-46.6747287,16,"Clinp - Clínica Pediátrica Ltda.","(11) 3845-1655",null,"R. Dr. Alceu de Campos Rodrigues, 258 - Vila Nova Conceição, São Paulo - SP",""],
		[-9.6544673,-35.7358076,16,"Clinvacin S\/s Ltda.","(82) 3221-5858",null,"R. Íris Alagoense, 267 - Farol, Maceió - AL",""],
		[-22.9081818,-43.5616733,16,"Cliva - Clínica De Vacinação","(21) 2413-9081",null,"R. Guaraí, 23 - Campo Grande, Rio de Janeiro - RJ",""],
		[-15.826691,-47.9218204,16,"Clivac Clinica De Vacinas","(61) 3346-7071",null,"Federal District",""],
		[-23.5324946,-46.6850895,16,"Clivan","(11) 3873-0200",null,"Condomínio Edifício Laudo Natel Tower - Rua Cotoxó, 611 - Vila Pompeia, São Paulo - SP",""],
		[-23.5324946,-46.6850895,16,"Clivan Vacinas","(11) 3873-0200",null,"Condomínio Edifício Laudo Natel Tower - Rua Cotoxó, 611 - Vila Pompeia, São Paulo - SP",""],
		[-23.5104095,-47.4637515,16,"Companhia Da Vacina","(15) 3234-7561",null,"Rua Dr. Francisco Prestes Maia, 99 - Vila Florinda, Sorocaba - SP",""],
		[-22.8934369,-47.0564661,16,"Companhia Da Vacina","(19) 3294-4282",null,"R. Olávo Bilac, 283 - Cambuí, Campinas - SP",""],
		[-5.0671226,-42.7953473,16,"Crescer Vacinas","(86) 2106-4720",null,"Av. Lindolfo Monteiro, 699 - Fátima, Teresina - PI",""],
		[-26.2928846,-48.8462104,16,"Curumim Clínica Infantil","(47) 3433-6466",null,"R. Rolf Colin, 170 - América, Joinville - SC",""],
		[-20.2954066,-40.2917814,16,"Cvp Vacinas","(27) 3235-9090",null,"R. João da Cruz, 164 - Praia do Canto, Vitória - ES",""],
		[-20.2954066,-40.2917814,16,"Cvp Vacinas","(27) 3235-9090",null,"R. João da Cruz, 164 - Praia do Canto, Vitória - ES",""],
		[-25.4729971,-50.656242,16,"Davaus - Centro Médico Hospitalar","(42) 3422-7070",null,"R. Zeferino Bittencourt, 1233, Irati - PR",""],
		[-23.5307554,-47.1353998,16,"Dba Clínica De Alergia E Vacinas","(11) 4712-6648",null,"São Roque, São Roque - SP",""],
		[-19.9166813,-43.9344931,16,"Drogaria Araújo","(31) 3213-7005",null,"Belo Horizonte, Belo Horizonte - State of Minas Gerais",""],
		[-23.5429949,-47.4498856,16,"Enova Vacinas","(15) 3247-2960",null,"R. Monte Alegre, 253 - Centro, Votorantim - SP",""],
		[-23.086058,-47.199947,16,"Hc Enfermeiras","(19) 3816-4991",null,"Condomínio Edifício Clin Integrada - Av. Pres. Vargas, 1221 - Cidade Nova, Indaiatuba - SP",""],
		[-26.8941201,-49.0844803,16,"Hospital Dia Do Pulmão","(47) 3037-7099",null,"Rua Engenheiro Paul Werner, 1141 - Itoupava Seca, Blumenau - SC",""],
		[-26.8941201,-49.0844803,16,"Hospital Do Pulmão","(47) 3037-7099",null,"Rua Engenheiro Paul Werner, 1141 - Itoupava Seca, Blumenau - SC",""],
		[-23.3264948,-51.1602036,16,"Hospital Evangélico De Londrina","(43) 3315-1921",null,"Av. Bandeirantes, 618 - Vila Ipiranga, Londrina - PR",""],
		[-30.0346471,-51.2176584,16,"Hospital Moinhos De Vento","(51) 3327-7073",null,"Porto Alegre, Porto Alegre - RS",""],
		[-23.1164121,-46.5435416,16,"Hospital Novo Atibaia","(11) 4414-6040",null,"R. Pedro Cunha, 290 - Vila Santista, Atibaia - SP",""],
		[-23.5628311,-46.6462595,16,"Hospital Sirio Libanes - Centro Imunizações","(11) 3394-5766",null,"Bela Vista, São Paulo - State of São Paulo",""],
		[-25.5688667,-49.3102713,16,"Hospital Vita","(41) 3315-1778",null,"BR-116, 396 - Campo de Santana, Curitiba - PR",""],
		[-23.6047613,-46.6669641,16,"Humana - Centro De Vacinação","(11) 5051-2499",null,"Alameda Jauaperi - Moema, São Paulo - SP",""],
		[-23.4241322,-51.9489492,16,"Ic Vacinas","(44) 3225-3738",null,"R. Luís Gama, 308 - Zona 04, Maringá - PR",""],
		[-23.1886048,-46.8931283,16,"Immuni - Vacinas & Alergia","(11) 4497-0754",null,"R. do Retiro, 424 - Vila Virginia, Jundiaí - SP",""],
		[-22.227348,-54.828494,16,"Immunitas Vacinas","(67) 3421-0091",null,"R. Maj. Capilé, 1422 - Jardim Caramuru, Dourados - MS",""],
		[-23.6020214,-46.6721032,16,"Imune - Clínica De Vacinação","(11) 5051-5259",null,"Moema, São Paulo - SP",""],
		[-30.0253173,-51.162117,16,"Imune - Clínica De Vacinação","(51) 3328-5322",null,"Av. João Wallig, 1800 - Passo d'Areia, Porto Alegre - RS",""],
		[-5.3689515,-49.1208314,16,"Imune - Medicina E Imunização S\/s Ltda.","(94) 3324-3704",null,"Av. Tocantins, 476 - Novo Horizonte, Marabá - PA",""],
		[-30.0346471,-51.2176584,16,"Imune - Shopping Barra Sul","( ) 51307-29333",null,"Porto Alegre, Porto Alegre - RS",""],
		[-19.922903,-43.9257646,16,"Imune Bh Clínica De Vacinas","(31) 3273-0607",null,"R. Ceará, 195 - Santa Efigênia, Belo Horizonte - MG",""],
		[-3.6900359,-40.3466199,16,"Imuniarte - Clínica De Vacinação - Sobral","(88) 3611-6021",null,"R. Oriano Mendes, 601 - Centro, Sobral - CE",""],
		[-23.1928308,-45.8972926,16,"Imunicare","(12) 3431-3554",null,"Av. Anchieta, 343 - Jardim Nova America, São José dos Campos - SP",""],
		[-19.5392094,-40.6353124,16,"Imuniclin - Clínica De Vacinação S\/c Ltda.","(27) 3721-1418",null,"R. Aroldo Antolini, 139 - Vila Nova, Colatina - ES",""],
		[-20.4734444,-54.6090112,16,"ImunitÁ - Centro De Imunização","(67) 3042-1515",null,"R. Pedro Celestino, 2 - Centro, Campo Grande - MS",""],
		[-21.9809229,-46.7959527,16,"Imunix - Clínica De Imunização","(19) 3623-1329",null,"R. Conselheiro Antônio Prado, 552 - Centro, São João da Boa Vista - SP",""],
		[-12.9936891,-38.5182034,16,"Imuniza - Centro De Vacinação - Unidade Canela","(71) 3338-8564",null,"R. Cônego José Lorêto, 9 - Canela, Salvador - BA",""],
		[-12.9730401,-38.502304,16,"Imuniza - Centro De Vacinação - Unidade Garibaldi","(71) 3338-8564",null,"Salvador, Salvador - State of Bahia",""],
		[-13.0009459,-38.4598535,16,"Imuniza - Centro De Vacinação - Unidade Itaigara","(71) 3338-8564",null,"R. Rio Grande do Sul, 635 - Pituba, Salvador - BA",""],
		[-12.8820575,-38.3148204,16,"Imuniza - Centro De Vacinação - Unidade Vilas Do Atlântico","(71) 3338-8564",null,"Lauro de Freitas, Lauro de Freitas - BA",""],
		[-12.9730401,-38.502304,16,"Imuniza Clínica De Imunização","(71) 3338-8564",null,"Salvador, Salvador - State of Bahia",""],
		[-27.5885181,-48.5448503,16,"Imunizar Clinica De Vacinas Ltda","(48) 9108-1081",null,"R. Vítor Konder, 125 - Centro, Florianópolis - SC",""],
		[-27.6140791,-48.6370861,16,"Imunizar Clinica De Vacinas Ltda","(48) 3047-9100",null,"São José, São José - SC",""],
		[-3.7350616,-38.5045483,16,"Imunize Clínica De Vacinação","(85) 3268-3321",null,"R. José Vilar, 1212 - Meireles, Fortaleza - CE",""],
		[-24.7250764,-53.7432585,16,"Imunne - Centro De Vacinação Toledo Ltda.","(45) 3378-5456",null,"R. Dom Pedro II, 2740 - Centro, Toledo - PR",""],
		[-23.5505199,-46.6333094,16,"Imunobaby","(11) 2291-5576",null,"São Paulo, São Paulo - State of São Paulo",""],
		[-23.5406494,-46.5888406,16,"Imunobaby","(11) 2291-5576",null,"R. Herval, 675 - Belenzinho, São Paulo - SP",""],
		[-22.8479349,-47.0632839,16,"Imunocamp","(19) 3756-7912",null,"Av. Guilherme Campos, 500 - Jardim Santa Genebra, Campinas - SP",""],
		[-22.8478413,-47.0624836,16,"Imunocamp Vacinas","(19) 3385-0105",null,"Av. Guilherme Campos, 500 - Jardim Santa Genebra, Campinas - SP",""],
		[-15.7542973,-47.8947214,16,"Imunocentro - Asa Norte","(61) 3272-0101",null,"Condomínio do Edifício Centro Clinico Vital Brazil - Asa Norte, Brasília - DF",""],
		[-15.826691,-47.9218204,16,"Imunocentro - Asa Sul","(61) 3346-0101",null,"Federal District",""],
		[-22.5296354,-41.9542572,16,"Imunolagos Clínica De Vacinas","(22) 2764-5772",null,"Rod. Amaral Peixoto, 3580 - Bosque da Praia, Rio das Ostras - RJ",""],
		[-15.826691,-47.9218204,16,"Imunolife - Unidade Dr. Crispim","(61) 3326-8899",null,"Federal District",""],
		[-15.9064363,-47.8624914,16,"Imunolife - Unidade Lago Sul","(61) 3364-0775",null,"Lago Sul, Brasília - DF",""],
		[-22.9024333,-43.111924,16,"Imunologia Vacinas Humanas - Icarai","(21) 3628-3814",null,"R. Gavião Peixoto, 70 - Icaraí, Niterói - RJ",""],
		[-19.9344554,-43.9370017,16,"Imunológica Vacinas Humanas","(31) 3352-7000",null,"R. Sergipe, 893 - Funcionários, Belo Horizonte - MG",""],
		[-25.4267777,-49.2837949,16,"Inalar Vacinas","(41) 3222-0973",null,"R. Padre Anchieta, 378 - Mercês, Curitiba - PR",""],
		[-23.9575843,-46.3315925,16,"Infectos Vacinas","(13) 3326-3310",null,"Av. Dona Ana Costa, 311 - Gonzaga, Santos - SP",""],
		[-23.5106351,-47.4628882,16,"Instituto Da InfÂncia","(15) 3234-2499",null,"Av. Barão de Tatuí, Sorocaba - SP",""],
		[-19.9166813,-43.9344931,16,"Instituto Hermes Pardini","(31) 3228-6200",null,"Belo Horizonte, Belo Horizonte - State of Minas Gerais",""],
		[-19.9315162,-43.9248081,16,"Instituto Hermes Pardini S\/a - Unidade Aimorés","(31) 3228-6200",null,"Rua dos Aimorés, 66 - Funcionários, Belo Horizonte - MG",""],
		[-19.9758683,-44.0136473,16,"Instituto Hermes Pardini S\/a - Unidade Barreiro","(31) 3228-6200",null,"Av. Sinfrônio Brochado, 115 - Barreiro, Belo Horizonte - MG",""],
		[-19.9403514,-44.046046,16,"Instituto Hermes Pardini S\/a - Unidade Eldorado Ii","(31) 3228-6200",null,"Rua Norberto Mayer, 626 - Eldorado, Contagem - MG",""],
		[-22.7378945,-47.6417542,16,"Instituto Pai Vacin","(19) 3436-6310",null,"Av. Independência, 1129 - Alto, Piracicaba - SP",""],
		[-23.5645701,-46.6759035,16,"Instituto Paulista De Doença","(11) 3981-8158",null,"Alameda Gabriel Monteiro da Silva, 429 - Jardim America, SP",""],
		[-1.439279,-48.4848112,16,"Intervida Vacinar","(91) 3366-6667",null,"Tv. Dom Pedro I, 1016 - Umarizal, Belém - PA",""],
		[-23.5823125,-46.6638387,16,"Ipp - Instituto De Pediatria E Puericultura","(11) 3884-9988",null,"Av. República do Líbano, 204 - Jardins, São Paulo - SP",""],
		[-23.5560929,-46.5604689,16,"Ipvacin","(11) 2671-5625",null,"R. Eleonora Cintra, 484 - Jardim Analia Franco, São Paulo - SP",""],
		[-19.928967,-43.9553313,16,"Itabayana Vacinas","(31) 3291-2671",null,"Rua Juiz de Fora, 1268 - Santo Agostinho, Belo Horizonte - MG",""],
		[-12.9962644,-38.4765497,16,"José Luiz Couto Vacinas","(71) 2108-4609",null,"Av. Juracy Magalhães Júnior, 2096 - Horto Florestal, Salvador - BA",""],
		[-23.0037251,-43.3176531,16,"Kinder Clínica De Vacinação - Barra Da Tijuca","(21) 3419-5333",null,"Av. das Américas, 500 - Barra da Tijuca, Rio de Janeiro - RJ",""],
		[-22.982639,-43.2073436,16,"Kinder Clínica De Vacinação - Ipanema","(21) 2521-5777",null,"R. Redentor, 95 - Ipanema, Rio de Janeiro - RJ",""],
		[-22.9238135,-43.2297289,16,"Kinder Clínica De Vacinação - Tijuca","(21) 3978-2555",null,"Rua Conde de Bonfim, 255 - Tijuca, Rio de Janeiro - RJ",""],
		[-23.0037251,-43.3176531,16,"Kinder Clínica Unidade Barra","(21) 3419-5333",null,"Av. das Américas, 500 - Barra da Tijuca, Rio de Janeiro - RJ",""],
		[-22.9843373,-43.2231424,16,"Kinder Clínica Unidade Leblon","(21) 2259-1399",null,"Leblon, Rio de Janeiro - State of Rio de Janeiro",""],
		[-22.9238135,-43.2297289,16,"Kinder Clínica Unidade Tijuca","(21) 3978-2555",null,"Rua Conde de Bonfim, 255 - Tijuca, Rio de Janeiro - RJ",""],
		[-23.0056754,-46.8345449,16,"Labene Clínica E Vacinas","(11) 4524-7248",null,"R. Campos Sales, 974 - Centro, Itatiba - SP",""],
		[-25.4419118,-49.2833931,16,"Laboratório Frischmann Aisengart - Unidade Batel","(41) 4004-0103",null,"R. Alferes Ângelo Sampaio, 1299 - Água Verde, Curitiba - PR",""],
		[-25.4273042,-49.243956,16,"Laboratório Frischmann Aisengart - Unidade Alto Da Xv","(41) 4004-0103",null,"Rua XV de Novembro, 3101 - Alto da XV, Curitiba - PR",""],
		[-27.5914401,-48.5464783,16,"Laboratório Médico Santa Luzia","(48) 3952-4200",null,"R. Dom Joaquim, 660 - Centro, Florianópolis - SC",""],
		[-27.5884677,-48.5789878,16,"Laboratório Médico Santa Luzia","(48) 3952-4200",null,"R. Manoel de Oliveira Ramos, 147 - Estreito, Florianópolis - SC",""],
		[-23.7635307,-53.3123675,16,"Laboratório Reunidos","(44) 3361-1644",null,"Zona I, Umuarama - PR",""],
		[-12.9730401,-38.502304,16,"Laboratório Sabin Vacinas","(71) 3261-1314",null,"Salvador, Salvador - State of Bahia",""],
		[-19.9166813,-43.9344931,16,"Laboratório São Marcos","(31) 2104-0100",null,"Belo Horizonte, Belo Horizonte - State of Minas Gerais",""],
		[-23.5721239,-46.689765,16,"Lavoisier Vacinas","(11) 3047-4488",null,"Av. Brg. Faria Lima, 1697 - Pinheiros, São Paulo - SP",""],
		[-13.0589397,-55.9119307,16,"Longevità - Clínica De Vacinas","(65) 3548-4200",null,"Av. Paraná, 215 - Pioneiro, Lucas do Rio Verde - MT",""],
		[-12.9730401,-38.502304,16,"Lpc Laboratório De Patologia E Vacinas","(71) 2203-9955",null,"Salvador, Salvador - State of Bahia",""],
		[-23.953527,-46.3307068,16,"Macc Med - Clínica De Vacinação","(13) 3234-8986",null,"Av. Dona Ana Costa, 221 - Encruzilhada, Santos - SP",""],
		[-15.826691,-47.9218204,16,"Mais Imune Clinica De Vacinas","(61) 3346-3286",null,"Federal District",""],
		[-23.981507,-46.3080006,16,"Mar Saúde","(13) 3272-5252",null,"Av. Dr. Epitácio Pessoa, 547 - Ponta da Praia, Santos - SP",""],
		[-23.9735381,-46.3055176,16,"Mar Saúde Vacinas","(13) 3272-5252",null,"Aparecida, Santos - SP",""],
		[-23.0306726,-46.9837599,16,"Medicina Nelson Faidiga & Filhos Associados","(19) 3876-3020",null,"Vinhedo, Vinhedo - SP",""],
		[-22.9682134,-47.0037047,16,"Medvacinas","(19) 3327-5554",null,"Av. Onze de Agosto, 1818 - Vila Embare, Valinhos - SP",""],
		[-3.7458126,-38.4979868,16,"Mulher Imune","(85) 3034-0990",null,"R. Henriqueta Galeno, 576 - Dionísio Torres, Fortaleza - CE",""],
		[-29.6873064,-53.8154769,16,"Multivacin Clínica De Vacinas Adultos E Crianças","(55) 3222-6686",null,"Santa Maria, Santa Maria - RS",""],
		[-18.9188582,-48.2849295,16,"Neocentro Vacinas","(34) 3235-1126",null,"Av. Raulino Cotta Pacheco, 55 - Osvaldo Rezende, Uberlândia - MG",""],
		[-15.826691,-47.9218204,16,"Neocentrovacinas","(61) 3361-0012",null,"Federal District",""],
		[-23.9904689,-46.2559075,16,"Neoclínica - Guarujá","(13) 3355-3416",null,"R. Buenos Aíres, 320 - Vila Maia, Guarujá - SP",""],
		[-25.4272574,-49.2824973,16,"Neovacine Clinica De Imunizações Ltda","(41) 3532-3225",null,"R. Visc. do Rio Branco, 560 - Mercês, Curitiba - PR",""],
		[-16.6836202,-49.2508942,16,"Padrão Medicina Diagnostica E Preventiva","(62) 3221-9000",null,"R. 83, 444 - St. Sul, Goiânia - GO",""],
		[-29.9527686,-51.1017865,16,"Panni Clínica De Serviços Em Saúde","(51) 3111-3559",null,"Av. Cel. João Batista Soares da Silveira e Souza, 79 - Vila Eunice Velha, Cachoeirinha - RS",""],
		[-22.9679,-43.1857777,16,"Prevcenter - Provacina R J Centro - Copacabana","(21) 2255-1403",null,"Rua Siqueira Campos, 93 - Copacabana, Rio de Janeiro - RJ",""],
		[-18.7172546,-39.8523672,16,"Prevclínica - Centro De Vacinação","(27) 3763-6376",null,"R. Liberdade, 296 - Aroeira, São Mateus - ES",""],
		[-25.088904,-50.1574612,16,"Prevenção Vacinas","(42) 3027-5090",null,"Av. Dr. Francisco Burzio, 337 - Centro, Ponta Grossa - PR",""],
		[-22.224699,-49.960834,16,"Previclin - Serviços Médicos","(14) 3413-8612",null,"Av. Rio Branco, 1393 - Alto Cafezal, Marília - SP",""],
		[-22.8936182,-47.0692461,16,"Previna Vacinas","(19) 3242-6742",null,"R. Camargo Paes, 279 - Jardim Guanabara, Campinas - SP",""],
		[-30.0213718,-51.1969054,16,"Previne - Porto Alegre","(51) 3337-5455",null,"Condomínio Edifício Radiologistas Reunidos - R. Cel. Bordini, 380 - Auxiliadora, Porto Alegre - RS",""],
		[-30.0213718,-51.1969054,16,"Previne Centro De VacinaÇÃo","(51) 3337-5455",null,"Condomínio Edifício Radiologistas Reunidos - R. Cel. Bordini, 380 - Auxiliadora, Porto Alegre - RS",""],
		[-25.4117658,-49.2571121,16,"Previnna Centro De Vacina","(41) 3503-7781",null,"Av. João Gualberto, 1946 - Juveve, Curitiba - PR",""],
		[-23.6688927,-46.5262211,16,"Pró - Imune Centro De Imunizações Ltda (hospital Dr. Cristóvão Da Gama) Unidade Iii","(11) 4990-7877",null,"Av. Dr. Erasmo, 101 - Vila Assunção, Santo André - SP",""],
		[-23.6687992,-46.5307023,16,"Pró - Imune Centro De Imunizações Ltda (unidade Ii)","(11) 4990-9755",null,"R. Votuporanga, 175 - Vila Dora, Santo André - SP",""],
		[-23.5105869,-47.4684442,16,"Pró - Infância - Clínica Infantil","(15) 3222-6500",null,"Av. Pres. Kenedy, 349 - Jardim Paulistano, Sorocaba - SP",""],
		[-23.5305516,-46.775709,16,"Pró - Vaccina - Centro De Imunização. (unidade I)","(11) 3673-8520",null,"R. Dona Primitiva Vianco, 244 - Centro, Osasco - SP",""],
		[-23.5337927,-46.6728364,16,"Pró - Vaccina - Centro De Imunização. (unidade Ii)","(11) 3871-5443",null,"R. Minerva, 182 - Perdizes, São Paulo - SP",""],
		[-23.6898429,-46.5648481,16,"Pró- Imune S\/s Ltda (unidade I)","(14) 4123-4300",null,"São Bernardo do Campo, São Bernardo do Campo - SP",""],
		[-23.6919042,-46.5578127,16,"Pró Saúde - Clínica De Vacinação","(11) 4330-6013",null,"Av. Índico, 746 - Jardim do Mar, São Bernardo do Campo - SP",""],
		[-23.5337927,-46.6728364,16,"Pro Vaccina","(11) 3673-8520",null,"R. Minerva, 182 - Perdizes, São Paulo - SP",""],
		[-23.6687511,-46.5316075,16,"Proimune Centro De Imunização","(11) 4990-9755",null,"Vila Dora, Santo André - SP",""],
		[-23.5328814,-46.7920029,16,"Projeto Criança - Centro De Vacinação","(11) 3683-0909",null,"Osasco, Osasco - SP",""],
		[-23.2045141,-45.8881089,16,"Prontil","(12) 3945-4400",null,"Av. Eng. Francisco José Longo, 1265 - Jardim Sao Dimas, São José dos Campos - SP",""],
		[-30.0255108,-51.2123441,16,"Prophylaxis - Clinicas De Vacinação","(51) 3018-8236",null,"Av. Cristóvão Colombo, 545 - Floresta, Porto Alegre - RS",""],
		[-22.9416192,-43.0552697,16,"Prophylaxis - Cto.de Imunizacao Itaipu S\/s Ltda","(21) 2609-6577",null,"Estrada Francisco da Cruz Nunes, 6723 - Itaipu, Niterói - RJ",""],
		[-22.9023425,-43.1151233,16,"Prophylaxis - Cto.medico Alcir Visela Chacar Ltda","(21) 2620-6539",null,"R. Miguel de Frias, 77 - Icaraí, Niterói - RJ",""],
		[-22.9537843,-43.1940651,16,"Prophylaxis Botafogo","(21) 2226-1032",null,"R. Real Grandeza, 108 - Botafogo, Rio de Janeiro - RJ",""],
		[-20.4651562,-54.6116027,16,"Prophylaxis Clínicade Vacinação","(67) 3472-3930",null,"R. Pedro Celestino, 955 - Centro, Campo Grande - MS",""],
		[-25.4412782,-49.2849884,16,"ProteÇÃo Vacinas","(41) 3342-8705",null,"Av. do Batel, 1230 - Batel, Curitiba - PR",""],
		[-19.9162245,-43.9407828,16,"Protege Vacinação E Cia","(31) 3271-6868",null,"Av. Afonso Pena, 262 - Centro, Belo Horizonte - MG",""],
		[-15.826691,-47.9218204,16,"Sabin Vacinas Clinica De Imunização","(61) 3329-8000",null,"Federal District",""],
		[-26.3032208,-48.849645,16,"Salutare Vacinas","(47) 3433-0043",null,"Condomínio Civil Mueller Shop Center Joinville - R. Visc. de Taunay, 235 - Centro, Joinville - SC",""],
		[-23.6149535,-46.6096947,16,"São Pedro - Clínica Médica E Imunizações","(11) 5061-1455",null,"R. Dom Macário, 89 - Saúde, São Paulo - SP",""],
		[-13.0000675,-38.4600483,16,"Seimi - Unidade Kids","(71) 3345-8200",null,"Av. Antônio Carlos Magalhães, 1 - Pituba, Salvador - BA",""],
		[-12.9730401,-38.502304,16,"Seimi Vacinas - Unidade Itaigara","-",null,"Salvador, Salvador - State of Bahia",""],
		[-12.255887,-38.959086,16,"Servac Serviços Médicos E Vacinação Ltda.","(75) 3623-4409",null,"Av. Getúlio Vargas, 675 - Centro, Feira de Santana - BA",""],
		[-19.8765728,-43.9536336,16,"Sesc Serviço Social Do Comércio","(31) 3439-8960",null,"R. Viana do Castelo, 490 - São Francisco, Belo Horizonte - MG",""],
		[-20.3037521,-40.2984095,16,"Sis Vacinas","(27) 3227-7140",null,"R. Aleixo Netto, 322 - Santa Lucia, Vitória - ES",""],
		[-23.3214807,-51.1576806,16,"Unimed - Clínica De Vacinação Londrina","(43) 3375-5050",null,"R. Sen. Souza Naves, 1000 - Centro, Londrina - PR",""],
		[-16.6786032,-49.2719728,16,"Unimed Goiânia - Centro De Vacinação","(62) 3216-8550",null,"Av. Anhanguera, 6540 - St. Aeroporto, Goiânia - GO",""],
		[-23.3242863,-51.1575104,16,"Unimed Londrina","(43) 3375-5050",null,"R. Sen. Souza Naves, 1333 - Centro, Londrina - PR",""],
		[-30.0255108,-51.2123441,16,"Unimed Porto Alegre","(80) 05104-646?",null,"Av. Cristóvão Colombo, 545 - Floresta, Porto Alegre - RS",""],
		[-29.9175623,-51.1779577,16,"Unimed Porto Alegre - Unidade Canoas","(80) 05104-646?",null,"BR-116 - São João, Porto Alegre - RS",""],
		[-23.0207599,-43.4530033,16,"Vac Health - Clínica De Vacinação","(21) 2437-0421",null,"Prima Center - Av. Alfredo Balthazar da Silveira, 1827 - Recreio dos Bandeirantes, Rio de Janeiro - RJ",""],
		[-23.5010599,-46.6214245,16,"Vacciclin Clínica De Imunização","(11) 6959-1339",null,"R. Duarte de Azevedo, 460 - Santana, São Paulo - SP",""],
		[-23.5468854,-46.6563591,16,"Vaccin - Centro De Infectologia E Imunização","(11) 3231-4249",null,"R. Itacolomi, 333 - Higienópolis, São Paulo - SP",""],
		[-29.1684082,-51.5125027,16,"Vaccinare","(54) 3151-6669",null,"R. 13 de Maio, 581 - Centro, Bento Gonçalves - RS",""],
		[-8.1317303,-34.902409,16,"Vaccine - Clínica De Vacinação - Boa Viagem","(81) 3326-9012",null,"Boa Viagem, Recife - State of Pernambuco",""],
		[-8.0425837,-34.8915462,16,"Vaccine - Clínica De Vacinação - Espinheiro","(81) 3426-0202",null,"R. da Hora, 77 - Espinheiro, Recife - PE",""],
		[-7.997443,-34.83979,16,"Vaccine - Clínica De Vacinação - Olinda - Pe","(81) 3493-2993",null,"Olinda Shopping - Av. Getúlio Vargas, 1605 - Bairro Novo, Olinda - PE",""],
		[-22.2233808,-45.921825,16,"Vaccine - Núcleo Sul Mineiro De Vacinas","(35) 3423-4616",null,"Av. Vicente Simões, 544 - Nossa Sra. Aparecida, Pouso Alegre - MG",""],
		[-15.5866805,-56.1106259,16,"Vaccine Care Clinica De Vacinação Especializada","(65) 3641-0023",null,"Duque de Caxias, Cuiabá - MT",""],
		[-8.0425837,-34.8915462,16,"Vaccine Clínica De Vacinação","(81) 3426-6625",null,"R. da Hora, 77 - Espinheiro, Recife - PE",""],
		[-8.0941077,-34.8855697,16,"Vaccine Riomar Shopping","(81) 3327-0003",null,"Pina, Recife - State of Pernambuco",""],
		[-2.5078544,-44.2838142,16,"Vaccini - Clinica De Vacinação - São Luis","(98) 3222-5697",null,"'Avenida Prof. Carlos Cunha, 3000 - Cohafuma, São Luís - MA",""],
		[-20.4622493,-54.5802658,16,"Vaccini - Clinica De Vacinação - Campo Grande","(67) 3043-1327",null,"R. Dr. Eduardo Machado Metelo, 445 - Chácara Cachoeira, Campo Grande - MS",""],
		[-27.1018464,-52.6190762,16,"Vaccini - Clínica De Vacinação - Chapecó","(49) 3316-2959",null,"Edifício Lazio Executivo - Av. Porto Alegre, 427 - Centro, Chapecó - SC",""],
		[-21.2439709,-44.9986889,16,"Vaccini - Clínica De Vacinação - Lavras","(35) 3821-5340",null,"Condomínio do Edifício das Clinicas - R. Misseno de Pádua, 352 - Centro, Lavras - MG",""],
		[-20.7928848,-51.7016071,16,"Vaccini - Clinica De Vacinação - Três Lagoas","(67) 3522-1677",null,"R. Bruno García, 1320 - Jardim Primaveril, Três Lagoas - MS",""],
		[-22.955796,-43.1963563,16,"Vaccini - Clínica De Vacinação (botafogo)","(21) 2579-0388",null,"Condomínio do Edifício Guilherme Romano - R. Voluntários da Pátria, 445 - Botafogo, Rio de Janeiro - RJ",""],
		[-22.967923,-43.185044,16,"Vaccini - Clínica De Vacinação Copacabana","(21) 2256-3843",null,"R. Barata Ribeiro, 370 - Copacabana, Rio de Janeiro - RJ",""],
		[-23.0015188,-46.838081,16,"Vaccini - Itatiba","(11) 4487-2618",null,"Av. Prudente de Morães, 223 - Vila Prudente de Moraes, Itatiba - SP",""],
		[-20.4622493,-54.5802658,16,"Vaccini Clínica De Vacinação","(67) 3043-1327",null,"R. Dr. Eduardo Machado Metelo, 445 - Chácara Cachoeira, Campo Grande - MS",""],
		[-23.0056376,-43.3140671,16,"Vaccini Clinica De Vacinação - Barra","(21) 2495-1909",null,"Av. Armando Lombardi, 1000 - Barra da Tijuca, Rio de Janeiro - RJ",""],
		[-22.7852805,-43.3080156,16,"Vaccini Clinica De Vacinação - Duque De Caxias","( ) 21368-53523",null,"R. Conde de Porto Alegre, 477 - Centro, Duque de Caxias - RJ",""],
		[-23.4229059,-51.9267382,16,"Vaccini Clinica De Vacinação - Maringá","(44) 3028-8404",null,"R. Santos Dumont, 1425 - Zona 01, Maringá - PR",""],
		[-22.5083976,-43.1726394,16,"Vaccini Clínica De Vacinação - Petrópolis","(24) 2237-5666",null,"Rua do Imperador, 288 - Centro, Petrópolis - RJ",""],
		[-23.0341679,-45.57383,16,"Vaccini Clinica De Vacinação - Taubaté","(12) 3621-1232",null,"Av. John Fitzgerald Kenedy, 1005 - Jardim das Nacoes, Taubaté - SP",""],
		[-23.0341679,-45.57383,16,"Vaccini Clinica De Vacinação - Taubaté","(12) 3621-1232",null,"Av. John Fitzgerald Kenedy, 1005 - Jardim das Nacoes, Taubaté - SP",""],
		[-22.9068467,-43.1728965,16,"Vaccini Clínica De Vacinação - Tijuca","(21) 2264-1167",null,"Rio de Janeiro, Rio de Janeiro - State of Rio de Janeiro",""],
		[-21.9679382,-42.0010643,16,"Vaccini Clinica De Vacinação (largo Do Machado)","(21) 2205-4857",null,"R. Ranulfo Machado Botelho, 29 - Arranchadouro, Santa Maria Madalena - RJ",""],
		[-23.5338329,-46.773719,16,"Vaciclin","(11) 3683-2424",null,"Praça Padroeira do Brasil, 49 - Centro, Osasco - SP",""],
		[-23.5357774,-46.7736231,16,"Vaciclin","(11) 3683-2424",null,"R. Cônego Afonso, 218 - Centro, Osasco - SP",""],
		[-15.5923896,-56.0900243,16,"Vaciclin Clinica De Imunização De Cuiabá","(65) 3051-2000",null,"R. Corumbá, 285 - Baú, Cuiabá - MT",""],
		[-22.9235839,-43.2307671,16,"Vacicorpus","(21) 3251-1852",null,"Rua Conde de Bonfim, 289 - Tijuca, Rio de Janeiro - RJ",""],
		[-22.6489018,-43.4078862,16,"Vacicorpus","(21) 2667-1537",null,"Condom. do Edifício Plaza Business Center - Av. Getúlio Vargas, 87 - Centro, Nova Iguaçu - RJ",""],
		[-22.9082369,-47.0461065,16,"Vacin","(19) 3252-6911",null,"Rua Barão de Paranapanema, 288 - Bosque, Campinas - SP",""],
		[-22.9085449,-47.0460956,16,"Vacin - Clínica De Imunização","(19) 3252-6911",null,"Rua Barão de Paranapanema, 271 - Bosque, Campinas - SP",""],
		[-12.9901178,-38.4558254,16,"Vacina & Ação","(71) 3015-1541",null,"Condomínio Caminho das Arvores - Av. Paulo VI, 1418 - Pituba, Salvador - BA",""],
		[-7.2220335,-35.8988344,16,"Vacina Center - Clínica De Vacinação","(83) 3322-2660",null,"Condomínio Centro Medico San Pietro - R. Montevidéu, 790 - Prata, Campina Grande - PB",""],
		[-23.5953382,-46.6500962,16,"Vacinação - Delboni Auriemo Medicia E Diag","(11) 3049-6999",null,"R. Dr. Diogo de Faria, 1379 - Vila Clementino, São Paulo - SP",""],
		[-3.1041608,-60.0187201,16,"Vacinar - Centro De Vacinação Ltda.","(92) 3584-3600",null,"Nossa Sra. das Gracas, Manaus - AM",""],
		[-17.79272,-50.9196585,16,"Vacinar - Clínica De Vacinas","(64) 3611-1010",null,"Rio Verde, Rio Verde - GO",""],
		[-23.6121762,-46.6790277,16,"Vacinar Centro De Imunização","(11) 3375-6126",null,"Av. Portugal, 307 - Brooklin Paulista, São Paulo - SP",""],
		[-22.9034074,-43.1137834,16,"Vacinar Icarai","(21) 2629-7900",null,"R. Álvares de Azevedo, 70 - Icaraí, Niterói - RJ",""],
		[-19.928967,-43.9553313,16,"Vacinas Bh Clínica De Vacinas","(31) 3291-6176",null,"Rua Juiz de Fora, 1268 - Santo Agostinho, Belo Horizonte - MG",""],
		[-26.9278269,-49.0572098,16,"Vacinas Santa Catarina","(47) 3326-6705",null,"R. Pref. Frederico Busch Júnior, 25 - Garcia, Blumenau - SC",""],
		[-23.1815852,-46.8895226,16,"Vacine","(11) 4521-5757",null,"R. Benjamin Constant, 447 - Centro, Jundiaí - SP",""],
		[-20.2953852,-40.3014306,16,"Vacine - Clínica De Imunizações","(27) 3227-3478",null,"Condomínio do Edifício Omega Center - Av. Nossa Sra. da Penha, 1255 - Praia do Canto, Vitória - ES",""],
		[-16.3325172,-48.9459049,16,"Vacine - Goiás","(62) 3324-6133",null,"Av. São Francisco, 251 - Jundiaí, Anápolis - GO",""],
		[-21.9725627,-42.0069129,16,"Vacine - Largo Do Machado","(21) 2205-4857",null,"Praça Luís Machado, 29 - Largo do Machado, Santa Maria Madalena - RJ",""],
		[-30.0597528,-51.2293231,16,"Vacine - Rrmg Clínica De Vacinas Ltda.","(51) 3233-9090",null,"R. José de Alencar, 237 - Menino Deus, Porto Alegre - RS",""],
		[-30.061189,-51.2247882,16,"Vacine Clinica De Vacinas","(51) 3233-9090",null,"R. Oscar Bittencourt, 324 - Menino Deus, Porto Alegre - RS",""],
		[-22.955796,-43.1963563,16,"Vacine Ltda - Botafogo","(21) 2579-0388",null,"Condomínio do Edifício Guilherme Romano - R. Voluntários da Pátria, 445 - Botafogo, Rio de Janeiro - RJ",""],
		[-23.5265497,-47.464788,16,"Vacinebem","(15) 3414-5400",null,"R. Maria Soares Leitão, 21 - Parque Campolim, Sorocaba - SP",""],
		[-14.855974,-40.8343889,16,"Vacinnar Centro De Imunização","(77) 3202-9091",null,"Av. dos Expedicionários, 668 - Recreio, Vitória da Conquista - BA",""],
		[-19.9254734,-43.9288861,16,"Vacsim Serviços De Vacinação","(31) 3213-7005",null,"Rua dos Otoni, 927 - Santa Efigênia, Belo Horizonte - MG",""],
		[-23.5889511,-46.7168599,16,"Vip Imune","(11) 3097-8935",null,"R. Valdemar Blakauskas, 68 - Vila Progredior, São Paulo - SP",""],
		[-29.9132584,-51.1861921,16,"Vitá Clínica De Vacinas","(51) 3059-2330",null,"Canoas, Canoas - RS",""],
		[-16.6880981,-49.2497928,16,"Ymune","(62) 3096-6262",null,"R. 86, 368 - St. Sul, Goiânia - GO",""],
		[-23.0858302,-47.202113,16,"Ymunomaster","(19) 3328-4285",null,"R. Dom Pedro I, 122 - Cidade Nova I, Indaiatuba - SP",""],
	];

	var marker = [];
	var infoWindow = [];
	var userLocation = null;
	var placeSearch, autocomplete;
	var componentForm = {
		street_number: 'short_name',
		route: 'long_name',
		locality: 'long_name',
		administrative_area_level_1: 'short_name',
		country: 'long_name',
		postal_code: 'short_name'
	};

	// Create Markers
	createMarkers();

	function getClosestMarker(position) {
		userLocation = new google.maps.Marker({
			position: position,
			map: map,
			icon: imageLocation,
		});

		/* Find closest marker */
		var pi = Math.PI;
		var R = 6371;
		var distances = [];
		var closest = -1;

		for (var i = 0; i < points.length; i++) {
			var loc = points[i];
			var lat2 = loc[0];
			var lng2 = loc[1];
			var chLat = lat2 - position.lat;
			var chLng = lng2 - position.lng;
			var dLat = chLat*(pi/180);
			var dLng = chLng*(pi/180);
			var rLat1 = position.lat*(pi/180);
			var rLat2 = lat2*(pi/180);
			var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLng/2) * Math.sin(dLng/2) * Math.cos(rLat1) * Math.cos(rLat2);
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
			var d = R * c;

			distances[i] = d;

			if (closest == -1 || d < distances[closest]) {
				closest = i;
			}
		}

		/* Calc Route */
		var destination = {lat: points[closest][0], lng: points[closest][1]};
		var request = {
			origin: position,
			destination: destination,
			travelMode: google.maps.TravelMode.DRIVING
		};
		directionsDisplay.setMap(map);
		directionsDisplay.setOptions({ suppressMarkers: true });
		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(response);
			}
			setTimeout(function() {
				map.setZoom(map.getZoom() - 1);
			}, 1000);
		});

		marker[closest].setVisible(true);
		var infoWindow = new google.maps.InfoWindow();

		map.setCenter(marker[closest].position);
		map.setZoom(16);

		var content = '';
		content += '<div class="info-window-google-maps">';
		content += '	<p class="title">' + points[closest][3] + '</p>';
		content += '	<p class="location">' + points[closest][6] + '</p>';
		content += '	<p class="tel">Tel: ' + points[closest][4] + '<br/></p>';
		content += '	<a target="_blank" href="https://www.google.com.br/maps/dir/'+position.lat+','+position.lng+'/'+points[closest][3].replace(/\s|\<br\/>|\//gi, '+')+'/@'+points[closest][0]+','+points[closest][1]+'" class="gmaps"><i class="fa fa-caret-right"></i>Ver no Google Maps</a>';
		content += '</div>';
		infoWindow.setContent(content);
		infoWindow.open(map, marker[closest]);

		$('#rota').attr('href', 'https://www.google.com.br/maps/dir/'+position.lat+','+position.lng+'/'+points[closest][3].replace(/\s|\<br\/>|\//gi, '+')+'/@'+points[closest][0]+','+points[closest][1]);
	}

	function clearUserMarker() {
		if (userLocation !== null) {
			userLocation.setMap(null);
		}
	}

	function createMarkers() {
		for (var i = 0; i < points.length; i++) {
			var point = points[i];
			marker[i] = new google.maps.Marker({
				position: {lat: point[0], lng: point[1]},
				map: map,
				icon: image,
			});
			var _marker = marker[i];
			infoWindow = new google.maps.InfoWindow();

			google.maps.event.addListener(_marker, 'click', (function(_marker, point) {
				return function() {
					var content = '';
					content += '<div class="info-window-google-maps">';
					content += '	<p class="title">' + point[3] + '</p>';
					content += '	<p class="location">' + point[6] + '</p>';
					content += '	<p class="tel">Tel: ' + point[4] + '<br/></p>';
					content += '	<a target="_blank" href="https://www.google.com.br/maps/dir/'+point[0]+','+point[1]+'/@'+point[0]+','+point[1]+',18z" class="gmaps"><i class="fa fa-caret-right"></i>Ver no Google Maps</a>';
					content += '</div>';
					infoWindow.setContent(content);
					infoWindow.open(map, _marker);
				}
			})(_marker, point));

			google.maps.event.addListener(infoWindow, 'domready', function() {
				var $ballon = $('.info-window-google-maps').parent().parent().parent().parent();
				var $arrowWrapper = $ballon.find('div').first();
				var $closeButton = $ballon.find('div').last();
				var $arrow = $arrowWrapper.find('div').eq(2);
				var $gmStyle = $ballon.find('.gm-style-iw');
				$gmStyle.removeAttr('style');
				$ballon.addClass('box-info-window-google-maps').css({});
				$arrowWrapper.addClass('arrow-wrapper-info-window-google-maps').css({'width': '100%'});
				$arrow.html('').addClass('arrow-info-window-google-maps').css({});
				$closeButton.html('<i class="fa fa-times"></i>').addClass('close-button-info-window-google-maps').removeAttr('style').css({});
				$arrowWrapper.find('div').eq(0).hide();
				$arrowWrapper.find('div').eq(1).hide();
				$arrowWrapper.find('div').eq(3).hide();
			});
		}
	}
}
