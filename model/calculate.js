export default class Calculate {
  constructor(interaction) {
    this.interaction = interaction;
  }
  async addFunc() {
    let addend = Number(this.interaction.options.getString("addend"));
    let summand = Number(this.interaction.options.getString("summand"));
    let result = addend + summand;
    this.interaction.reply(
      `大哥拿到了${addend}個土芒果，又拿到了${summand}個土芒果，總共加起來有${result}個土芒果`
    );
  }

  async minusFunc() {
    let minuend = Number(this.interaction.options.getString("minuend"));
    let subtraction = Number(this.interaction.options.getString("subtraction"));
    let result = minuend - subtraction;
    this.interaction.reply(
      `大哥拿到了${minuend}個土芒果，扣掉了${subtraction}個土芒果，現在還有${result}個土芒果`
    );
  }

  async multiplicationFunc() {
    let multiplier = Number(this.interaction.options.getString("multiplier"));
    let multiplicand = Number(
      this.interaction.options.getString("multiplicand")
    );
    let result = multiplier * multiplicand;
    this.interaction.reply(
      `大哥拿到了${multiplicand}盒土芒果，每盒有${multiplier}，所以大哥總共拿到${result}顆土芒果`
    );
  }

  async divisionFunc() {
    let divisor = Number(this.interaction.options.getString("divisor"));
    let dividend = Number(this.interaction.options.getString("dividend"));
    let result = divisor / dividend;
    this.interaction.reply(
      `大哥拿到了${divisor}個土芒果要要賣，${dividend}裝成一盒，所以大哥有${result}盒土芒果`
    );
  }
}
