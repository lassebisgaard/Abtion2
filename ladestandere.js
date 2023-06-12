
// Få fat i checkboksene og billedet
var normalLaderCheckbox = document.querySelector('input[name="normallader"]');
var hurtigLaderCheckbox = document.querySelector('input[name="hurtiglader"]');
var superLaderCheckbox = document.querySelector('input[name="superlader"]');
var billede = document.querySelector('.kort');

// Lyt efter ændringer i checkboksene
normalLaderCheckbox.addEventListener('change', function() {
  if (this.checked) {
    billede.src = 'billeder/kort1.png';
    uncheckOtherCheckboxes(this);
  } else {
    billede.src = 'billeder/kort.png';
  }
});

hurtigLaderCheckbox.addEventListener('change', function() {
  if (this.checked) {
    billede.src = 'billeder/kort2.png';
    uncheckOtherCheckboxes(this);
  } else {
    billede.src = 'billeder/kort.png';
  }
});

superLaderCheckbox.addEventListener('change', function() {
  if (this.checked) {
    billede.src = 'billeder/kort3.png';
    uncheckOtherCheckboxes(this);
  } else {
    billede.src = 'billeder/kort.png';
  }
});

var checkboxes = document.querySelectorAll('.lade-checkbox');

function uncheckOtherCheckboxes(checkedCheckbox) {
  checkboxes.forEach(function(checkbox) {
    if (checkbox !== checkedCheckbox) {
      checkbox.checked = false;
    }
  });
}