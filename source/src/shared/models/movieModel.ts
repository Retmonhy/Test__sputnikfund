import { ICreateData, IMovie } from "./../types/index";
export class Movie implements IMovie {
  title: string;
  fullTitle: string;
  crew: string;
  year: string;
  imDbRating: string;
  imDbRatingCount: string;
  id: string;
  image: string;
  rank: string;
  constructor(data: ICreateData) {
    this.title = data.title;
    this.fullTitle = data.fullTitle;
    this.crew = data.crew;
    this.year = data.year;
    //должен генерить сервер, просто сделаю затычки, чтобы ts не ругался
    this.imDbRating = "";
    this.imDbRatingCount = "";
    this.id = Date.now().toString();
    this.image = "";
    this.rank = "";
  }
}
