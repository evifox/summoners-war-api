export default class UtcTime {
  static get now(): number {
    const date = new Date();
    return date.getTime() - date.getTimezoneOffset() * 60 * 1000;
  }

  static get nowInSeconds(): number {
    return (this.now / 1000) >> 0;
  }
}
