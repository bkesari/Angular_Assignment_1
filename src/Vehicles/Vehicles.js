/*This method is used to sort the table based on the column header clicked.
when we are  passing sortTable(0) from HTML <th> of Make  - Make column header is clicked. 
when we are  passing sortTable(1) from HTML <th> of Model - Model column header is clicked.
when we are  passing sortTable(2) from HTML <th> of Year- Year column header is clicked.
*/
function sortTable(n) {
  
  var table, rows, sorting, i, currentRow, nextRow, shouldSort, sortDir, count = 0; 
  /*In getElementById() we are passing the value which is same as the id 
  that we used for <table> in HTML.*/
  table = document.getElementById("myTable"); 

  //setting this value to true enables sorting.
  sorting = true;   

  /*If the sortDir is set to asc the on load the table values will be similar to JSON files 
  but on first click of any header it will sort the table in ascending order 
  Vice Versa for sortDir when set to desc it will sort in Descending order*/
  sortDir = "asc"; 


  /*Make a loop that will continue until
  no sorting has been done*/
  while (sorting) {
    
    /*set the value for sorting as false so that on click of header it will sort the table
     based on the column header clicked*/
    sorting = false;
    
    rows = table.getElementsByTagName("tr");
    
    /*Loop through all table rows (except the
    first, which contains table headers).*/
    for (i = 1; i < (rows.length - 1); i++) {
    //there should be no sorting.
      shouldSort = false;
    
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      
      currentRow = rows[i].getElementsByTagName("td")[n];
      nextRow = rows[i + 1].getElementsByTagName("td")[n];
      
      /*check if the two rows should be sorted ,
      based on the direction, asc or desc:*/
      if (sortDir == "asc") {
        if (currentRow.innerHTML.toLowerCase() > nextRow.innerHTML.toLowerCase()) {
          //if so, sort should be done and break the loop:
          shouldSort= true;
          break;
        }
      } else if (sortDir == "desc") {
        if (currentRow.innerHTML.toLowerCase() < nextRow.innerHTML.toLowerCase()) {
          //if so, mark as a sort and break the loop:
          shouldSort= true;
          break;
        }
      }
    }
    if (shouldSort) {
      /*If a sort has been marked, make the sort
      and mark that a sort has been done*/
      rows[i].parentNode.insertBefore(rows[i+1], rows[i]);      
      sorting = true;
      //Each time a switch is done, increase this count by 1:
      count ++;      
    } else {
      /*If no sorting has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (count == 0 && sortDir == "asc") {
        sortDir = "desc";
        sorting = true;
      }
    }
  }
}
