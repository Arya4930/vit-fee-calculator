document.addEventListener('DOMContentLoaded', function() {
  const roomDropdown = document.getElementById('room');
  const block = document.getElementById('block');

  const allRoomOptions = [
    { value: 'na', text: 'N/A' },
    { value: '2ac', text: '2AC' },
    { value: '2nac', text: '2NAC' },
    { value: '3ac', text: '3AC' },
    { value: '3nac', text: '3NAC' },
    { value: '4ac', text: '4AC' },
    { value: '4nac', text: '4NAC' },
    { value: '5nac', text: '5NAC' },
    { value: '6ac', text: '6AC' },
    { value: '6nac', text: '6NAC' },
    { value: '8nac', text: '8NAC' },
    { value: 'p2ac', text: '2AC' },
    { value: 'p2nac', text: '2NAC' },
    { value: 'p3ac', text: '3AC' },
    { value: 'p3nac', text: '3NAC' },
    { value: 'p4ac', text: '4AC ( Bunker Bed )' },
    { value: 'p4nac', text: '4NAC ( Bunker Bed )' },
    { value: 'pf4ac', text: '4AC ( Flat Bed )' },
    { value: 'pf4nac', text: '4NAC ( Flat Bed )' }
  ];

  const top8Options = allRoomOptions.slice(0, 11);
  const bottom8Options = allRoomOptions.slice(-8);
  const na = allRoomOptions.slice(0, 1);

  block.addEventListener('change', function() {
    const SelectedBlock = block.value;
    let newOptions = [];

    if (SelectedBlock === 'na'){
        newOptions = na;
    } else if (SelectedBlock === '1') {
      newOptions = top8Options;
    } else if (SelectedBlock === '2') {
      newOptions = bottom8Options;
    }

    updateRoomDropdown(newOptions);
  });

  function updateRoomDropdown(options) {
    roomDropdown.innerHTML = '';
    options.forEach(option => {
      const newOption = document.createElement('option');
      newOption.value = option.value;
      newOption.textContent = option.text;
      roomDropdown.appendChild(newOption);
    });
  }
  updateRoomDropdown(na);
});