// Script JavaScript pour l'accordéon

window.addEventListener('DOMContentLoaded', function() {

    var accordionHeaders = document.querySelectorAll('.accordion-header');

    for (var i = 0; i < accordionHeaders.length; i++) {

      accordionHeaders[i].addEventListener('click', function() {
        // Fermer tous les contenus d'accordéon sauf celui qui a été cliqué
        var accordionContent = this.nextElementSibling;
        var accordionItems = accordionContent.parentElement.parentElement.children;

        for (var j = 0; j < accordionItems.length; j++) {

          if (accordionItems[j] !== this.parentElement) {
            accordionItems[j].querySelector('.accordion-content').style.display = 'none';
          }
        }
        
        // Basculer l'affichage du contenu d'accordéon cliqué
        accordionContent.style.display = accordionContent.style.display === 'none' ? 'block' : 'none';
      });
    }
  });
  