function deadAntCount(ants) {
    if (!ants) return 0;
    ants = ants.replace(/ant/g, '');
    const a = (ants.match(/a/g) || []).length;
    const n = (ants.match(/n/g) || []).length;
    const t = (ants.match(/t/g) || []).length;

    return Math.max(a, n, t);
}
console.log(deadAntCount('ant anantt aantnt'))