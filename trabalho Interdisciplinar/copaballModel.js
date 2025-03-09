export function filtrarColaboradoresPorTime(colaboradores, time) {
    return colaboradores.filter(colaborador => colaborador.time === time);
}

export function filtrarColaboradoresPorNome(colaboradores, nome) {
    return colaboradores.filter(colaborador => colaborador.nome.toLowerCase().includes(nome.toLowerCase()));
}

export function filtrarJogadores(colaboradores) {
    return colaboradores.filter(colaborador => colaborador.cargo === "Jogador");
}

export function filtrarTecnicos(colaboradores) {
    const tecnicosUnicos = new Map();
    colaboradores.forEach(colaborador => {
        if (colaborador.cargo === "Técnico" && !tecnicosUnicos.has(colaborador.time)) {
            tecnicosUnicos.set(colaborador.time, colaborador);
        }
    });
    return Array.from(tecnicosUnicos.values());
}

export function filtrarPartidasPorData(partidas, data) {
    return partidas.filter(partida => partida.data === data);
}

export function filtrarPartidasPorTime(partidas, time) {
    return partidas.filter(partida => partida.time1 === time || partida.time2 === time);
}
