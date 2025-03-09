import { Partida } from "./classes/partida.js";
import { Time } from "./classes/time.js";
import { Diretor } from "./classes/diretor.js";
import { Tecnico } from "./classes/tecnico.js";
import { Jogador } from "./classes/jogador.js";

//Vetor de Times
var vetTimes = [
    new Time("Flamengo", "01/01/1903", 5, 137, "Maracanã"),
    new Time("Atlético Mineiro", "25/03/1908", 1, 89, "Mineirão"),
    new Time("Fluminense", "21/07/1902", 4, 112, "Maracanã"),
    new Time("São Paulo", "25/01/1930", 3, 156, "Morumbi"),
    new Time("Corinthians", "01/09/1910", 3, 98, "Neo Química Arena"),
    new Time("Bahia", "01/01/1931", 2, 73, "Arena Fonte Nova"),
    new Time("Grêmio", "15/09/1903", 2, 124, "Arena do Grêmio"),
    new Time("Palmeiras", "26/08/1914", 3, 167, "Allianz Parque"),
    new Time("Santos", "14/04/1912", 5, 142, "Vila Belmiro"),
    new Time("Cruzeiro", "02/01/1921", 4, 105, "Mineirão"),
    new Time("Botafogo", "12/08/1904", 2, 81, "Nilton Santos"),
    new Time("Vasco", "21/08/1898", 4, 119, "São Januário")
]

//Vetor de Partidas
var vetPartidas = [
    new Partida("03/02/2023", vetTimes[11], vetTimes[0], 2, 5, "Série A"),
    new Partida("04/02/2023", vetTimes[7], vetTimes[4], 3, 4, "Série B"),
    new Partida("05/02/2023", vetTimes[3], vetTimes[8], 1, 2, "Série B"),
    new Partida("07/02/2023", vetTimes[2], vetTimes[9], 4, 2, "Série A"),
    new Partida("09/02/2023", vetTimes[6], vetTimes[5], 2, 2, "Série A"),
    new Partida("10/02/2023", vetTimes[10], vetTimes[1], 3, 1, "Série B")
];

// Vetor de Colaboradores
var vetColaboradores = [
    // Flamengo
    new Diretor("Marcos Braz", "10/05/1970", "Brasileiro", 20000, "Escola de Gestão Esportiva"),
    new Tecnico("Tite", "25/05/1961", "Brasileiro", 30000, "Licença UEFA Pro", 20),
    new Jogador("Santos", "17/03/1990", "Brasileiro", 10000, 1, "Goleiro", 0, 0),
    new Jogador("Matheuzinho", "10/04/2000", "Brasileiro", 15000, 2, "Lateral-direito", 2, 10),
    new Jogador("David Luiz", "22/04/1987", "Brasileiro", 18000, 23, "Zagueiro", 5, 2),
    new Jogador("Léo Pereira", "31/01/1996", "Brasileiro", 17000, 4, "Zagueiro", 3, 1),
    new Jogador("Ayrton Lucas", "19/06/1997", "Brasileiro", 16000, 6, "Lateral-esquerdo", 1, 8),
    new Jogador("Thiago Maia", "23/03/1997", "Brasileiro", 20000, 5, "Volante", 4, 15),
    new Jogador("Gerson", "20/05/1997", "Brasileiro", 25000, 8, "Meio-campo", 10, 20),
    new Jogador("Arrascaeta", "01/06/1994", "Uruguaio", 30000, 14, "Meia-atacante", 12, 25),
    new Jogador("Bruno Henrique", "30/12/1990", "Brasileiro", 35000, 27, "Ponta-direita", 15, 18),
    new Jogador("Gabigol", "30/08/1996", "Brasileiro", 40000, 9, "Atacante", 30, 5),
    new Jogador("Pedro", "20/06/1997", "Brasileiro", 38000, 21, "Atacante", 18, 12),

    // Atlético Mineiro
    new Diretor("Rodrigo Caetano", "12/12/1975", "Brasileiro", 18000, "Faculdade de Administração"),
    new Tecnico("Gabriel Milito", "07/09/1980", "Argentino", 25000, "Licença UEFA Pro", 10),
    new Jogador("Everson", "22/03/1990", "Brasileiro", 10000, 22, "Goleiro", 0, 0),
    new Jogador("Guga", "29/08/1997", "Brasileiro", 15000, 2, "Lateral-direito", 2, 10),
    new Jogador("Jemerson", "24/08/1992", "Brasileiro", 18000, 3, "Zagueiro", 5, 2),
    new Jogador("Rever", "29/01/1985", "Brasileiro", 17000, 4, "Zagueiro", 3, 1),
    new Jogador("Dodô", "17/11/1998", "Brasileiro", 16000, 6, "Lateral-esquerdo", 1, 8),
    new Jogador("Allan", "08/01/1997", "Brasileiro", 20000, 5, "Volante", 4, 15),
    new Jogador("Edenilson", "18/12/1989", "Brasileiro", 25000, 8, "Meio-campo", 10, 20),
    new Jogador("Zaracho", "16/03/1998", "Argentino", 30000, 10, "Meia-atacante", 12, 25),
    new Jogador("Hulk", "25/07/1986", "Brasileiro", 35000, 7, "Ponta-direita", 15, 18),
    new Jogador("Paulinho", "15/07/2000", "Brasileiro", 40000, 9, "Atacante", 30, 5),
    new Jogador("Eduardo Vargas", "20/11/1989", "Chileno", 38000, 11, "Atacante", 18, 12),

    // Fluminense
    new Diretor("Mário Bittencourt", "10/05/1970", "Brasileiro", 20000, "Escola de Gestão Esportiva"),
    new Tecnico("Fernando Diniz", "25/04/1974", "Brasileiro", 28000, "Licença UEFA Pro", 10),
    new Jogador("Fábio", "20/05/1980", "Brasileiro", 10000, 1, "Goleiro", 0, 0),
    new Jogador("Samuel Xavier", "06/06/1990", "Brasileiro", 15000, 2, "Lateral-direito", 2, 10),
    new Jogador("Nino", "10/04/1997", "Brasileiro", 18000, 3, "Zagueiro", 5, 2),
    new Jogador("David Braz", "21/05/1987", "Brasileiro", 17000, 4, "Zagueiro", 3, 1),
    new Jogador("Marcelo", "12/05/1988", "Brasileiro", 16000, 6, "Lateral-esquerdo", 1, 8),
    new Jogador("André", "16/07/2000", "Brasileiro", 20000, 5, "Volante", 4, 15),
    new Jogador("Martinelli", "11/06/2001", "Brasileiro", 25000, 8, "Meio-campo", 10, 20),
    new Jogador("Ganso", "12/10/1989", "Brasileiro", 30000, 10, "Meia-atacante", 12, 25),
    new Jogador("Arias", "21/01/1990", "Colombiano", 35000, 7, "Ponta-direita", 15, 18),
    new Jogador("Cano", "02/03/1988", "Argentino", 40000, 9, "Atacante", 30, 5),
    new Jogador("John Kennedy", "18/05/2002", "Brasileiro", 38000, 11, "Atacante", 18, 12),

    // São Paulo
    new Diretor("Carlos Belmonte", "05/03/1972", "Brasileiro", 19000, "Escola de Gestão Esportiva"),
    new Tecnico("Dorival Júnior", "25/04/1962", "Brasileiro", 28000, "Licença UEFA Pro", 15),
    new Jogador("Rafael", "20/05/1990", "Brasileiro", 10000, 1, "Goleiro", 0, 0),
    new Jogador("Igor Vinícius", "01/04/1997", "Brasileiro", 15000, 2, "Lateral-direito", 2, 10),
    new Jogador("Arboleda", "18/08/1991", "Equatoriano", 18000, 3, "Zagueiro", 5, 2),
    new Jogador("Miranda", "07/09/1984", "Brasileiro", 17000, 4, "Zagueiro", 3, 1),
    new Jogador("Welington", "22/02/1999", "Brasileiro", 16000, 6, "Lateral-esquerdo", 1, 8),
    new Jogador("Gabriel Neves", "09/03/1997", "Uruguaio", 20000, 5, "Volante", 4, 15),
    new Jogador("Pablo Maia", "10/01/2002", "Brasileiro", 25000, 8, "Meio-campo", 10, 20),
    new Jogador("Luciano", "03/03/1993", "Brasileiro", 30000, 10, "Atacante", 12, 25),
    new Jogador("Rodrigo Nestor", "25/12/2000", "Brasileiro", 35000, 7, "Meia-atacante", 15, 18),
    new Jogador("Jonathan Calleri", "23/09/1993", "Argentino", 40000, 9, "Atacante", 30, 5),
    new Jogador("Galoppo", "15/06/1999", "Argentino", 38000, 11, "Meia-atacante", 18, 12),

    // Corinthians
    new Diretor("Duílio Monteiro Alves", "10/05/1975", "Brasileiro", 20000, "Escola de Gestão Esportiva"),
    new Tecnico("Mano Menezes", "11/06/1962", "Brasileiro", 28000, "Licença UEFA Pro", 20),
    new Jogador("Cássio", "06/06/1987", "Brasileiro", 10000, 12, "Goleiro", 0, 0),
    new Jogador("Fagner", "11/06/1989", "Brasileiro", 15000, 2, "Lateral-direito", 2, 10),
    new Jogador("Gil", "12/06/1987", "Brasileiro", 18000, 3, "Zagueiro", 5, 2),
    new Jogador("Bruno Méndez", "10/09/1999", "Uruguaio", 17000, 4, "Zagueiro", 3, 1),
    new Jogador("Fábio Santos", "16/09/1985", "Brasileiro", 16000, 6, "Lateral-esquerdo", 1, 8),
    new Jogador("Fausto Vera", "26/03/2000", "Argentino", 20000, 5, "Volante", 4, 15),
    new Jogador("Renato Augusto", "08/02/1988", "Brasileiro", 25000, 8, "Meio-campo", 10, 20),
    new Jogador("Giuliano", "31/05/1990", "Brasileiro", 30000, 10, "Meia-atacante", 12, 25),
    new Jogador("Róger Guedes", "02/10/1996", "Brasileiro", 35000, 7, "Ponta-direita", 15, 18),
    new Jogador("Yuri Alberto", "18/03/2001", "Brasileiro", 40000, 9, "Atacante", 30, 5),
    new Jogador("Adson", "21/01/2000", "Brasileiro", 38000, 11, "Ponta-esquerda", 18, 12),

    // Bahia
    new Diretor("Guilherme Bellintani", "10/05/1970", "Brasileiro", 20000, "Escola de Gestão Esportiva"),
    new Tecnico("Renato Paiva", "25/04/1976", "Português", 28000, "Licença UEFA Pro", 10),
    new Jogador("Marcos Felipe", "20/05/1990", "Brasileiro", 10000, 1, "Goleiro", 0, 0),
    new Jogador("Nino Paraíba", "10/04/2000", "Brasileiro", 15000, 2, "Lateral-direito", 2, 10),
    new Jogador("Kanú", "18/08/1991", "Brasileiro", 18000, 3, "Zagueiro", 5, 2),
    new Jogador("David Duarte", "29/01/1985", "Brasileiro", 17000, 4, "Zagueiro", 3, 1),
    new Jogador("Matheus Bahia", "25/07/1994", "Brasileiro", 16000, 6, "Lateral-esquerdo", 1, 8),
    new Jogador("Rezende", "08/01/1997", "Brasileiro", 20000, 5, "Volante", 4, 15),
    new Jogador("Thaciano", "18/12/1989", "Brasileiro", 25000, 8, "Meio-campo", 10, 20),
    new Jogador("Daniel", "15/10/1997", "Brasileiro", 30000, 10, "Meia-atacante", 12, 25),
    new Jogador("Everaldo", "20/11/1998", "Brasileiro", 35000, 7, "Ponta-direita", 15, 18),
    new Jogador("Vitor Jacaré", "25/12/1994", "Brasileiro", 40000, 9, "Atacante", 30, 5),
    new Jogador("Ademir", "01/01/1999", "Brasileiro", 38000, 11, "Ponta-esquerda", 18, 12),

    // Grêmio
    new Diretor("Romildo Bolzan Jr.", "10/05/1970", "Brasileiro", 20000, "Escola de Gestão Esportiva"),
    new Tecnico("Renato Gaúcho", "09/09/1962", "Brasileiro", 28000, "Licença UEFA Pro", 20),
    new Jogador("Gabriel Chapecó", "08/06/1994", "Brasileiro", 10000, 1, "Goleiro", 0, 0),
    new Jogador("Fábio", "30/01/1990", "Brasileiro", 15000, 2, "Lateral-direito", 2, 10),
    new Jogador("Kannemann", "15/03/1991", "Argentino", 18000, 3, "Zagueiro", 5, 2),
    new Jogador("Geromel", "21/09/1985", "Brasileiro", 17000, 4, "Zagueiro", 3, 1),
    new Jogador("Diogo Barbosa", "24/02/1997", "Brasileiro", 16000, 6, "Lateral-esquerdo", 1, 8),
    new Jogador("Villasanti", "10/03/1997", "Paraguaio", 20000, 5, "Volante", 4, 15),
    new Jogador("Bitello", "01/01/2000", "Brasileiro", 25000, 8, "Meio-campo", 10, 20),
    new Jogador("Cristaldo", "18/06/1999", "Argentino", 30000, 10, "Meia-atacante", 12, 25),
    new Jogador("Ferreira", "15/07/1999", "Brasileiro", 35000, 7, "Ponta-direita", 15, 18),
    new Jogador("Luis Suárez", "24/01/1987", "Uruguaio", 40000, 9, "Atacante", 30, 5),
    new Jogador("Vina", "10/10/1997", "Brasileiro", 38000, 11, "Ponta-esquerda", 18, 12),

    // Palmeiras
    new Diretor("Leila Pereira", "10/05/1965", "Brasileira", 22000, "Escola de Gestão Esportiva"),
    new Tecnico("Abel Ferreira", "22/12/1978", "Português", 30000, "Licença UEFA Pro", 15),
    new Jogador("Weverton", "13/12/1987", "Brasileiro", 10000, 21, "Goleiro", 0, 0),
    new Jogador("Marcos Rocha", "11/12/1988", "Brasileiro", 15000, 2, "Lateral-direito", 2, 10),
    new Jogador("Gustavo Gómez", "06/05/1993", "Paraguaio", 18000, 3, "Zagueiro", 5, 2),
    new Jogador("Murilo", "27/03/1997", "Brasileiro", 17000, 4, "Zagueiro", 3, 1),
    new Jogador("Piquerez", "24/02/1999", "Uruguaio", 16000, 6, "Lateral-esquerdo", 1, 8),
    new Jogador("Zé Rafael", "16/06/1993", "Brasileiro", 20000, 5, "Volante", 4, 15),
    new Jogador("Gabriel Menino", "29/09/2000", "Brasileiro", 25000, 8, "Meio-campo", 10, 20),
    new Jogador("Raphael Veiga", "19/06/1995", "Brasileiro", 30000, 10, "Meia-atacante", 12, 25),
    new Jogador("Dudu", "07/01/1992", "Brasileiro", 35000, 7, "Ponta-direita", 15, 18),
    new Jogador("Rony", "11/05/1995", "Brasileiro", 40000, 9, "Atacante", 30, 5),
    new Jogador("Endrick", "21/07/2006", "Brasileiro", 38000, 11, "Atacante", 18, 12),

    // Santos
    new Diretor("Andres Rueda", "10/05/1975", "Brasileiro", 20000, "Escola de Gestão Esportiva"),
    new Tecnico("Odair Hellmann", "25/04/1962", "Brasileiro", 28000, "Licença UEFA Pro", 15),
    new Jogador("João Paulo", "10/05/1990", "Brasileiro", 10000, 1, "Goleiro", 0, 0),
    new Jogador("Madson", "13/03/1992", "Brasileiro", 15000, 2, "Lateral-direito", 2, 10),
    new Jogador("João Basso", "12/06/1993", "Brasileiro", 18000, 3, "Zagueiro", 5, 2),
    new Jogador("Messias", "29/01/1985", "Brasileiro", 17000, 4, "Zagueiro", 3, 1),
    new Jogador("Lucas Pires", "25/07/1994", "Brasileiro", 16000, 6, "Lateral-esquerdo", 1, 8),
    new Jogador("Dodi", "08/01/1997", "Brasileiro", 20000, 5, "Volante", 4, 15),
    new Jogador("Carlos Sánchez", "18/12/1989", "Uruguaio", 25000, 8, "Meio-campo", 10, 20),
    new Jogador("Lucas Lima", "15/10/1997", "Brasileiro", 30000, 10, "Meia-atacante", 12, 25),
    new Jogador("Marcos Leonardo", "20/11/1998", "Brasileiro", 35000, 7, "Ponta-direita", 15, 18),
    new Jogador("Deivid Washington", "25/12/1994", "Brasileiro", 40000, 9, "Atacante", 30, 5),
    new Jogador("Angelo", "01/01/1999", "Brasileiro", 38000, 11, "Ponta-esquerda", 18, 12),

    // Cruzeiro
    new Diretor("Pedro Lourenço", "10/05/1970", "Brasileiro", 20000, "Escola de Gestão Esportiva"),
    new Tecnico("Paulo Pezzolano", "25/04/1983", "Uruguaio", 28000, "Licença UEFA Pro", 10),
    new Jogador("Rafael Cabral", "20/05/1990", "Brasileiro", 10000, 1, "Goleiro", 0, 0),
    new Jogador("Wesley Gasolina", "10/04/2000", "Brasileiro", 15000, 2, "Lateral-direito", 2, 10),
    new Jogador("Luciano Castán", "18/08/1991", "Brasileiro", 18000, 3, "Zagueiro", 5, 2),
    new Jogador("Neris", "29/01/1985", "Brasileiro", 17000, 4, "Zagueiro", 3, 1),
    new Jogador("Marquinhos Cipriano", "25/07/1994", "Brasileiro", 16000, 6, "Lateral-esquerdo", 1, 8),
    new Jogador("Neto Moura", "08/01/1997", "Brasileiro", 20000, 5, "Volante", 4, 15),
    new Jogador("Ramiro", "18/12/1989", "Brasileiro", 25000, 8, "Meio-campo", 10, 20),
    new Jogador("Mateus Vital", "15/10/1997", "Brasileiro", 30000, 10, "Meia-atacante", 12, 25),
    new Jogador("Bruno Rodrigues", "20/11/1998", "Brasileiro", 35000, 7, "Ponta-direita", 15, 18),
    new Jogador("Gilberto", "25/12/1994", "Brasileiro", 40000, 9, "Atacante", 30, 5),
    new Jogador("Stênio", "01/01/1999", "Brasileiro", 38000, 11, "Ponta-esquerda", 18, 12),

    // Botafogo
    new Diretor("Jorge Braga", "10/05/1970", "Brasileiro", 20000, "Escola de Gestão Esportiva"),
    new Tecnico("Bruno Lage", "25/04/1976", "Português", 28000, "Licença UEFA Pro", 10),
    new Jogador("Gatito Fernández", "20/05/1990", "Paraguaio", 10000, 1, "Goleiro", 0, 0),
    new Jogador("Rafael", "10/04/2000", "Brasileiro", 15000, 2, "Lateral-direito", 2, 10),
    new Jogador("Adryelson", "18/08/1991", "Brasileiro", 18000, 3, "Zagueiro", 5, 2),
    new Jogador("Victor Cuesta", "29/01/1985", "Argentino", 17000, 4, "Zagueiro", 3, 1),
    new Jogador("Hugo", "25/07/1994", "Brasileiro", 16000, 6, "Lateral-esquerdo", 1, 8),
    new Jogador("Tchê Tchê", "08/01/1997", "Brasileiro", 20000, 5, "Volante", 4, 15),
    new Jogador("Eduardo", "18/12/1989", "Brasileiro", 25000, 8, "Meio-campo", 10, 20),
    new Jogador("Jeffinho", "15/10/1997", "Brasileiro", 30000, 10, "Meia-atacante", 12, 25),
    new Jogador("Victor Sá", "20/11/1998", "Brasileiro", 35000, 7, "Ponta-direita", 15, 18),
    new Jogador("Tiquinho Soares", "25/12/1994", "Brasileiro", 40000, 9, "Atacante", 30, 5),
    new Jogador("Júnior Santos", "01/01/1999", "Brasileiro", 38000, 11, "Ponta-esquerda", 18, 12),

    // Vasco
    new Diretor("Pedro Martins", "10/05/1970", "Brasileiro", 20000, "Escola de Gestão Esportiva"),
    new Tecnico("Ramón Díaz", "25/04/1959", "Argentino", 28000, "Licença UEFA Pro", 20),
    new Jogador("Léo Jardim", "20/05/1990", "Brasileiro", 10000, 1, "Goleiro", 0, 0),
    new Jogador("Puma Rodríguez", "10/04/2000", "Uruguaio", 15000, 2, "Lateral-direito", 2, 10),
    new Jogador("Léo Pelé", "18/08/1991", "Brasileiro", 18000, 3, "Zagueiro", 5, 2),
    new Jogador("Maicon", "29/01/1985", "Brasileiro", 17000, 4, "Zagueiro", 3, 1),
    new Jogador("Lucas Piton", "25/07/1994", "Brasileiro", 16000, 6, "Lateral-esquerdo", 1, 8),
    new Jogador("Jair", "08/01/1997", "Brasileiro", 20000, 5, "Volante", 4, 15),
    new Jogador("Andrey Santos", "18/12/1989", "Brasileiro", 25000, 8, "Meio-campo", 10, 20),
    new Jogador("Alex Teixeira", "15/10/1997", "Brasileiro", 30000, 10, "Meia-atacante", 12, 25),
    new Jogador("Gabriel Pec", "20/11/1998", "Brasileiro", 35000, 7, "Ponta-direita", 15, 18),
    new Jogador("Erick Marcus", "25/12/1994", "Brasileiro", 40000, 9, "Atacante", 30, 5),
    new Jogador("Pedro Raul", "01/01/1999", "Brasileiro", 38000, 11, "Ponta-esquerda", 18, 12)
];

//coloque os colaboradores aqui em baixo: