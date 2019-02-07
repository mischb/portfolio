$(document).ready(function(){
  $('#portfolio').hide();
  $('#resume').hide();
  $('#resume-nav').click((e) => {
    // e.stopPropagation();
    hideSections(e.target);
  });
  $('#portfolio-nav').click((e) => {
    // e.stopPropagation();
    hideSections(e.target);
  });
  $('#about-me-nav').click((e) => {
    // e.stopPropagation();
    hideSections(e.target);
  });
});

function hideSections(target){
  !$(target).attr('id') ? [target] = $(target).parent() : target;
  const id = $(target).attr('id');
  const targetVal = id.substring(0, id.indexOf('-nav'));
  const sections = $('section');
  const links = $('.nav-item');
  $.each(links, (i, link) => {
    link === target ? $(target).addClass('selected') : $(link).removeClass('selected');
  });
  $.each(sections, (i, section) => {
    if($(section).attr('id') !== targetVal){
      $(section).hide();
    }else{
      $(section).show();
    }
  });
}


const [modal] = $('#myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
const [flamingleImg] = $('#flamingle-screenshot');
const [modalImg] = $('#modal-screenshot');
const [flamingleCaptionText] = $('#caption');
$(flamingleImg).click(e => {
  modal.style.display = 'block';
  modalImg.src = e.target.src;
  flamingleCaptionText.innerHTML = e.target.alt;
});

// Get the <span> element that closes the modal
const close = $('#close');
// $(document).click(() => {
//   if($(modal).is(':visible')){
//     $(document).click(() => $(modal).addClass('hide-modal'));
//   }
// });

modal.click(() => modal.hide());

// When the user clicks on <span> (x), close the modal
$(close).click(() => { 
  modal.style.display = 'none';
});