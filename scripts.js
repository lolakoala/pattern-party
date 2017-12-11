//js for accordian tabs

const toggleTab = id => {
  $('.tab-viewing').removeClass('tab-viewing');
  $(`#${id}`).addClass('tab-viewing');
}

const toggleMinMax = id => {
  $('.tab-viewing .min-max').text('+');
  $(`#${id} .min-max`).text('—');
}

const toggleCard = idNum => {
  $('.tab-card-viewing').removeClass('tab-card-viewing');
  $(`#tab-card${idNum}`).addClass('tab-card-viewing');
}

const toggleTabsView = event => {
  const id = event.target.id;
  const idNum = id.substr(id.length - 1);
  toggleMinMax(id);
  toggleTab(id);
  toggleCard(idNum);
}



$('.tab').click(event => toggleTabsView(event));
