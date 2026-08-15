const leaguePriority = {
  // =====================
  // MAJOR INTERNATIONAL
  // =====================

  2: 100, // UEFA Champions League
  1: 100, // FIFA World Cup
  4: 100, // Euro Championship

  9: 95, // Copa America
  531: 95, // UEFA Super Cup
  15: 95, // FIFA Club World Cup

  // =====================
  // TOP DOMESTIC LEAGUES
  // =====================

  39: 90, // Premier League
  140: 85, // La Liga
  135: 85, // Serie A
  78: 85, // Bundesliga
  61: 80, // Ligue 1

  // =====================
  // DOMESTIC SUPER CUPS
  // =====================

  528: 88, // Community Shield
  556: 88, // Spanish Super Cup
  547: 88, // Italian Super Cup
  529: 88, // German Super Cup
  526: 83, // Trophée des Champions

  // =====================
  // DOMESTIC CUPS
  // =====================

  45: 82, // FA Cup
  143: 82, // Copa del Rey
  137: 82, // Coppa Italia
  81: 82, // DFB-Pokal
  66: 78, // Coupe de France
  48: 82, // EFL Cup

  // =====================
  // EUROPEAN CLUB
  // =====================

  3: 75, // UEFA Europa League
  848: 70, // UEFA Conference League

  // =====================
  // IRAN
  // =====================

  290: 9, // Persian Gulf Pro League
};

export const teamPriority = {
  // =====================
  // CLUBS
  // =====================

  541: 45, // Real Madrid
  529: 45, // Barcelona
  50: 45, // Manchester City
  40: 45, // Liverpool
  157: 45, // Bayern Munich
  85: 45, // PSG

  42: 40, // Arsenal
  33: 40, // Manchester United
  47: 35, // Tottenham
  49: 40, // Chelsea
  489: 40, // AC Milan
  505: 40, // Inter
  496: 40, // Juventus
  492: 35, // Napoli
  497: 35, // Roma
  530: 40, // Atletico Madrid
  165: 35, // Dortmund

  // =====================
  // IRANIAN CLUBS
  // =====================

  2733: 35, // Esteghlal FC
  2737: 35, // Tractor Sazi
};

const nationaTeams = {
  26: 45, // Argentina
  6: 45, // Brazil
  10: 45, // England
  2: 45, // France
  9: 45, // Spain
  25: 45, // Germany
  111: 40, // Netherlands
  1: 40, // Belgium
  27: 40, // Portugal
  13: 40, // Italy
};

// =====================
// QUALIFICATION ROUNDS
// =====================

const qualificationRounds = [
  "1st Qualifying Round",
  "2nd Qualifying Round",
  "3rd Qualifying Round",
  "Play-offs",
];

// =====================
// DOMESTIC KNOCKOUT CUPS
// =====================

const knockoutCups = [
  45, // FA Cup
  143, // Copa del Rey
  137, // Coppa Italia
  81, // DFB-Pokal
  66, // Coupe de France
];

// =====================
// CUP ROUND DETECTION
// =====================

function isRoundOf16OrLater(round) {
  if (!round) return false;

  const normalizedRound = round.toLowerCase();

  return (
    normalizedRound.includes("1/8") ||
    normalizedRound.includes("quarter") ||
    normalizedRound.includes("semi") ||
    normalizedRound.includes("final")
  );
}

// =====================
// MATCH PRIORITY
// =====================

export default function MatchPriority(match) {
  let score = 0;

  const leagueId = match.league.id;

  const homeId = match.teams.home.id;
  const awayId = match.teams.away.id;

  const round = match.league.round || "";

  // =====================
  // COMPETITION PRIORITY
  // =====================

  if (qualificationRounds.includes(round)) {
    score += 10;
  } else if (knockoutCups.includes(leagueId)) {
    if (!isRoundOf16OrLater(round)) {
      score += 10;
    }

    // Round of 16 and later
    else {
      score += leaguePriority[leagueId] || 0;
    }
  }

  // Normal competitions
  else {
    score += leaguePriority[leagueId] || 0;
  }

  // =====================
  // TEAM PRIORITY
  // =====================

  score += teamPriority[homeId] || 0;
  score += teamPriority[awayId] || 0;
  score += nationaTeams[homeId] || 0;
  score += nationaTeams[awayId] || 0;

  return score;
}
