export default function formatarDate(targetDate: Date) {
    const meses = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho",
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
  
    const dia = targetDate.getDate();
    const mes = meses[targetDate.getMonth()];
    const horas = targetDate.getHours() % 12 || 12;
    const periodo = targetDate.getHours() < 12 ? "AM" : "PM";
  
    const dataFormatada = `${dia} de ${mes} | ${horas} Hrs ${periodo}`;
  
    return dataFormatada;
  }