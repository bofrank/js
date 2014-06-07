<h2>DAILY HIGHSCORES</h2>
<div class="highscores">
  <table>

    <?php
      $today = date("Ymd");
      $result=mysql_query("SELECT * FROM highscoreroulette2 WHERE date = $today ORDER BY cash DESC") or die (mysql_error());
      $number_cols=mysql_num_fields($result);
      $number_cols=mysql_num_fields($result);
      $i=1;		  
      
      while ($row=mysql_fetch_row($result)){
        
        $result_username=$row[0];
        $result_score=$row[1];
        
        if($i%2==0){
          $altrow="#d6d6d6";
        }else{
          $altrow="#f9f9f9";
        }            
        
        echo "
          <tr style='background-color:".$altrow.";'>
            <td>
              <span class='listing'>$i.</span>
            </td>
            <td>
              <span class='listing'>$result_username</span>
            </td>
            <td class='scoredisplay' style='width:57px;text-align:right;'>
              <span class='listing'>$result_score&nbsp;&nbsp;</span>
            </td>
          </tr>
        ";

        $i++;
        if($i>10)break;

      }

    ?>    
  
  </table>

</div>
