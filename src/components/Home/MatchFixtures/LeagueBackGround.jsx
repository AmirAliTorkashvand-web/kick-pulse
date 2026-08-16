import premierLeague from "../../../assets/images/pl.jpg";
import laLiga from "../../../assets/images/laliga.jpg";
import serieA from "../../../assets/images/serie A.jpg";
import bundesliga from "../../../assets/images/bundes.jpg";
import ligue1 from "../../../assets/images/france.jpg";
import championsLeague from "../../../assets/images/champ.jpg";
import europaLeague from "../../../assets/images/europe.jpg";
import conferenceLeague from "../../../assets/images/conference.jpg";
import worldCup from "../../../assets/images/world cup.jpg";
import copaAmerica from "../../../assets/images/copa.jpg";
import euro from "../../../assets/images/euro.jpg";
import defaultBackground from "../../../assets/images/default.jpg";
import eufaSupercup from "../../../assets/images/eufa supercup.jpg";
import IranLeague from "../../../assets/images/IranLeague.jpg";
import facup from "../../../assets/images/facup.jpg";
import copadelrey from "../../../assets/images/copadelrey.jpg";
import coppaitaly from "../../../assets/images/coppaitaly.jpg";
import dfbpokal from "../../../assets/images/dfbpokal.jpg";
import frenchcup from "../../../assets/images/frenchcup.jpg";
import carabao from "../../../assets/images/carabao.jpg";
import community from "../../../assets/images/community.jpg";
import spainSupercup from "../../../assets/images/spainSupercup.jpg";
import italySupercup from "../../../assets/images/italySupercup.jpg";
import franceSupercup from "../../../assets/images/franceSupercup.jpg";
import germanySupercup from "../../../assets/images/germanySupercup.jpg";

export const leagueBackgrounds = {
  39: premierLeague,
  140: laLiga,
  135: serieA,
  78: bundesliga,
  61: ligue1,
  2: championsLeague,
  3: europaLeague,
  848: conferenceLeague,
  1: worldCup,
  9: copaAmerica,
  4: euro,
  531: eufaSupercup,
  290: IranLeague,
  45: facup,
  143: copadelrey,
  137: coppaitaly,
  81: dfbpokal,
  66: frenchcup,
  48: carabao,
  528: community,
  556: spainSupercup,
  547: italySupercup,
  529: germanySupercup,
  526: franceSupercup,
};

export function getLeagueBackground(leagueId) {
  return leagueBackgrounds[leagueId] || defaultBackground;
}

export function hasLeagueBackground(leagueId) {
  return Boolean(leagueBackgrounds[leagueId]);
}
