const { SlashCommandBuilder } = require("discord.js");

const ANWSERS = [
  "Puede ser.",
  "Me parece que no rey.",
  "Siento que podría ser.",
  "Por las dudas, no.",
  "Vos sabes que si?",
  "Mejor preguntaría otra cosa.",
  "De una.",
  "Uh, ahí me mataste.",
  "No.",
  "Si.",
  "Ni idea che, no soy de acá.",
  "Por su pollo.",
  "Si, y vas a ganar seniority.",
  "No, y vas a perder seniority.",
  "No es un buen momento para eso.",
  "Claro que si campeon.",
  "Ni a palos.",
  "Tiene toda la pinta.",
  "Yo diria que si.",
  "Yo diria que no.",
  "Probablemente.",
  "Ahí no tengo ni idea.",
  "Si, tal cual.",
  "Dudoso che.",
  "Me parece que si.",
  "Sin dudas.",
  "Como lo veo yo, si.",
  "La verdad que no.",
  "Cincuenta y cincuenta.",
  "Ojalá.",
  "Depende.",
  "No lo creo.",
  "mmm...",
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ask")
    .setDescription("Preguntame algo!")
    .addStringOption((option) =>
      option
        .setName("pregunta")
        .setDescription("Preguntas de respuestas booleanas por favor.")
        .setRequired(true)
    ),
  async execute(interaction) {
    await interaction.reply(
      `-${interaction.user.username}: ${interaction.options.getString("pregunta")}
-EstoBot: ${ANWSERS[Math.floor(Math.random() * ANWSERS.length)]}`
    );
  },
};
