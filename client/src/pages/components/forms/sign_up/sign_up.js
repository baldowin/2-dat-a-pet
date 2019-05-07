import React from 'react';

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      toolbarEnabled: true
    });
  });

  // Or with jQuery

  $('.fixed-action-btn').floatingActionButton({
    toolbarEnabled: true
  });