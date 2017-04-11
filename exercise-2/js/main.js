// Main JavaScript File

// Data objects to work with
var people = [
  {name:'Edgar', favColor:'Green'},
  {name:'Rashmi', favColor:'Blue'},
  {name:'Amelia', favColor:'#000000'},
];

var people2 = [
  {name:'Edgar', favColor:'Green'},
  {name:'Amelia', favColor:'#000000'},
];

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
  // Create a varaible myDiv by selecting the element with id my-div (this is already created for you).
  var myDiv = d3.select('#my-div');

  // Create a variable `paragraphs` by selecting all  `p` elements in  `myDiv`, and binding you data  `people` to it.
  // Make sure to specify the `name` attribute as an identifying characteristic in your data-join.
  var paragraphs = myDiv.selectAll('p')
                        .data(people, function(p){return p.name}); // join data


  // Add a paragraph to the div for each person in your dataset following instructions in the index.html file
  paragraphs.enter()
            .append('p')
            .text(function(d){return d.name})
            .style('color', function(c){return c.favColor});

  // Use `setTimeout` function to wait 3 seconds, then do the following
  setTimeout(function(){
    // Re-define your variable `paragraphs` by selecting all `p` elements in `myDiv`, and binding the data `people2` to it.
    // Make sure to specify the `name` attribute as an identifying characteristic in your data-join.
    var paragraphs = myDiv.selectAll('p')
                          .data(people2, function(p){return p.name}); // join data *****
        // because previous `paragraphs` had nothing in it *****

    // Determine which people are no longer represented in the data (`exit`), and transition their opacity to 0 and remove them.
    paragraphs.exit()
              .transition()
              .duration(200)
              .style('font-size', '50px')
              .transition()
              .duration(500)
              .style('font-size', '0px')
              .remove();
  }, 1000);
});
