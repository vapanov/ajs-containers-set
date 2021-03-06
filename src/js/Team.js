export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    // поскольку по условию задачи мы не должны добавлять в команду
    // именно один и тот же объект, не вижу смысла писать
    // более глубокую проверку равенства объектов
    if (!this.members.has(character)) {
      this.members.add(character);
    } else {
      throw new Error(`Character ${character.name} was added into the Team already`);
    }
  }

  addAll(...members) {
    members.forEach((member) => {
      this.members.add(member);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
