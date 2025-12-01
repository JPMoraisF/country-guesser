export class Country {
  public Code: string;
  public Name: string;
  public Capital: string;
  public Region: string;
  public Subregion: string;
  public Population: number;
  public Languages: string[];
  public Borders: string[];
  public Flag: string;

  constructor(
    code: string,
    name: string,
    capital: string,
    region: string,
    subregion: string,
    population: number,
    languages: string[],
    borders: string[],
    flag: string
  ) {
    this.Code = code;
    this.Capital = capital;
    this.Population = population;
    this.Languages = languages;
    this.Borders = borders;
    this.Name = name;
    this.Region = region;
    this.Subregion = subregion;
    this.Flag = flag;
  }

  get hasBorders(): boolean {
    return this.Borders.length > 0;
  }

  get borderCount(): number {
    return this.Borders?.length ?? 0;
  }

  get mainLanguage(): string | null {
    return this.Languages?.[0] ?? null;
  }

  get formattedPopulation(): string {
    return this.Population.toLocaleString('en-US');
  }

  getBordersHint(allCountries: Country[]): string {
    if (!this.Borders || this.Borders.length === 0) {
      return 'This country has no bordering countries.';
    }

    const shuffled = [...this.Borders].sort(() => Math.random() - 0.5);
    const selectedCodes = shuffled.slice(0, 3);

    const names = selectedCodes
      .map((code) => allCountries.find((c) => c.Code === code)?.Name)
      .filter(Boolean);

    return names.length > 0
      ? `This country borders: ${names.join(', ')}`
      : 'This country has no bordering countries.';
  }

  getRandomHint(): string[] {
    const hints = [
      `Capital: ${this.Capital}`,
      `Region: ${this.Region}`,
      `Sub-region: ${this.Subregion}`,
      `Population: ${this.Population.toLocaleString()}`,
      `Languages: ${this.Languages.join(', ')}`,
      `Flag: ${this.Flag}`,
    ];

    return hints;
  }
}
