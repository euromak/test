<? 
	$config = unserialize(file_get_contents('config.txt')); 
	include "./mysql.php";
?>

	<? 
		if (!isSet($_GET['mainpage'])) {
	?>
	<div class="container">
		<?
			//$filearr = unserialize(file_get_contents('cararr.txt'));
			
			
			if($_GET['type']=='3doors')		$t="3d";
			if($_GET['type']=='5doors')		$t="5d";
			if($_GET['type']=='clubman')	$t="clubman";
			if($_GET['type']=='countryman')	$t="countryman";
			if($_GET['type']=='jcw')		$t="jcw";
			if($_GET['type']=='cabrio')		$t="cabrio";
			
			
			?>
			<div class="row align-items-center secondhead">
				
				<div class="col-md-6 col-xl-5  justify-content-center">
					<div class="shead getleadspinoff" style="cursor: pointer;" ident="<? echo str_replace(" ","&nbsp;",strip_tags($config['car'][$t]['name'])); ?>" pic="<? echo $config['car'][$t]['pic']; ?>" redprice="<? echo str_replace("&nbsp;руб.","",str_replace(" ","&nbsp;",strip_tags($config['car'][$t]['redprice']))); ?>" price="<? echo str_replace("&nbsp;руб.","",str_replace(" ","&nbsp;",strip_tags($config['car'][$t]['price']))); ?>">
						<? echo $config['car'][$t]['name'] ?>
					
					<img src="./img/<? echo $config['car'][$t]['pic']; ?>">
					</div>
				</div>
				<div class="col-md-6 col-xl-4 justify-content-center">
					<div class="sadv getleadspinoff" style="cursor: pointer;" ident="<? echo str_replace(" ","&nbsp;",strip_tags($config['car'][$t]['name'])); ?>" pic="<? echo $config['car'][$t]['pic']; ?>" redprice="<? echo str_replace("&nbsp;руб.","",str_replace(" ","&nbsp;",strip_tags($config['car'][$t]['redprice']))); ?>" price="<? echo str_replace("&nbsp;руб.","",str_replace(" ","&nbsp;",strip_tags($config['car'][$t]['price']))); ?>">
					<?
					
					echo "<span>От ".$config['car'][$t]['price']."&nbsp;руб.</span>";
					
					$pr=explode("\n",$config['car'][$t]['advant']); 
					
					echo "<div style='display:inline-block;'>";
					for($i=0;$i<count($pr);$i++)
					{
						//echo "<br class='d-block d-md-none'>";
						echo "<div style='text-align:left'>";
							echo "<div class='sp'>".$pr[$i]."</div>";
						echo "</div>";
						
					}
					echo "</div>";
									
					?>
					
					<div class="d-block d-xl-none"><div class="but red getleadspinoff ac" style="margin-top:20px;" ident="<? echo str_replace(" ","&nbsp;",strip_tags($config['car'][$t]['name'])); ?>" pic="<? echo $config['car'][$t]['pic']; ?>" redprice="<? echo str_replace("&nbsp;руб.","",str_replace(" ","&nbsp;",strip_tags($config['car'][$t]['redprice']))); ?>" price="<? echo str_replace("&nbsp;руб.","",str_replace(" ","&nbsp;",strip_tags($config['car'][$t]['price']))); ?>" >Получить дополнительную выгоду.</div></div>
					</div>
				</div>
				<div class="col-xl-3 d-none d-xl-block justify-content-center">
					<div class="but red getleadspinoff ac" ident="<? echo str_replace(" ","&nbsp;",strip_tags($config['car'][$t]['name'])); ?>" pic="<? echo $config['car'][$t]['pic']; ?>" redprice="<? echo str_replace("&nbsp;руб.","",str_replace(" ","&nbsp;",strip_tags($config['car'][$t]['redprice']))); ?>" price="<? echo str_replace("&nbsp;руб.","",str_replace(" ","&nbsp;",strip_tags($config['car'][$t]['price']))); ?>" >Получить дополнительную выгоду.</div>
				</div>
			</div>
			<?
			
			

			
			
			if($_GET['type']=='3doors') $res=mysqli_query($connect,"select * from v2_cars where ModelForWeb like '%3 ДВЕРИ%' order by price");
			if($_GET['type']=='5doors') $res=mysqli_query($connect,"select * from v2_cars where ModelForWeb like '%5 ДВЕРЕЙ%' order by price");
			if($_GET['type']=='clubman') $res=mysqli_query($connect,"select * from v2_cars where ModelForWeb like '%CLUBMAN%' order by price");
			if($_GET['type']=='countryman') $res=mysqli_query($connect,"select * from v2_cars where ModelForWeb like '%COUNTRYMAN%' order by price");
			if($_GET['type']=='jcw') $res=mysqli_query($connect,"select * from v2_cars where ModelForWeb like '%JOHN%' order by price");
			if($_GET['type']=='cabrio') $res=mysqli_query($connect,"select * from v2_cars where ModelForWeb like '%CABRIO%' order by price");
			for($i=0;$i<mysqli_num_rows($res);$i++)
			{
				
					?>
					<div class="row carobj">
						<div class="col-12 col-md-6 col-xl-3 listclick" carid="<? echo mysqli_result($res,$i,'id'); ?>">
							<img  src="<? if(mysqli_result($res,$i,'Photo')!="") echo "./photos/small_".mysqli_result($res,$i,'Photo'); else echo "./img/no-photo.jpg"; ?>">
						</div>
						
						<div class="col-12 col-md-6 col-xl-9 infoblockcarlist">
							<div class="row">
								<div class="col-12 col-xl-12">
									<div class="name "><? echo mysqli_result($res,$i,'ModelForWeb'); ?></div> 
								</div>
								<div class="col-12 col-md-12 col-xl-5">
									<div class="listclick" carid="<? echo mysqli_result($res,$i,'id'); ?>">
										<div class="color"><? echo mysqli_result($res,$i,'BodyColor'); ?></div>
										<div class="desc"><? echo mysqli_result($res,$i,'EngineVolume')." см.<sup>3</sup>, ".mysqli_result($res,$i,'FuelType').", ".mysqli_result($res,$i,'EngineHorsePower')." л.с."; ?></div>
									</div>
									<div class="buton gray listclick d-none d-xl-inline-block" carid="<? echo mysqli_result($res,$i,'id'); ?>">Забронировать этот автомобиль</div> 
								</div>
								<div class="col-12 col-md-12 col-xl-3">
									<div class="price getleadspinoff"><? echo str_replace(" ","&nbsp;",number_format(ceil(mysqli_result($res,$i,'Price')), 0, ',', '&nbsp;')); ?>&nbsp;руб.</div>
								</div>
								<div class="col-12 col-md-12 col-xl-4 ">
									<div class="d-block d-xl-none" style="height:25px;"></div>
									<div class="but red listclick ac" carid="<? echo mysqli_result($res,$i,'id'); ?>">Получить дополнительную выгоду</div>
								</div>
							</div>
						</div>
					</div>
					<?
				
				
			}
			
			
		?>
</div>
<?
		}
		else
	{
		?>
		<div class="pagecontent">
				<div class="container">
					<div class="row" style="justify-content: center;">
						<? 
						$list[0]="3d";
						$list[1]="5d";
						$list[2]="clubman";
						$list[3]="countryman";
						$list[4]="jcw";
						$list[5]="cabrio";
						for($i=0;$i<5;$i++){ 
						?>
						<div class="col-12 col-md-6 col-lg-4">
							<div class="mcar">
								<img src="./img/<? echo $config['car'][$list[$i]]['pic']; ?>" lpage="<? echo $config['car'][$list[$i]]['filter']; ?>">
								<div class="name"><? echo $config['car'][$list[$i]]['name']; ?></div>
								<!--<div class="price red"><? echo $config['car'][$list[$i]]['redprice']; ?><span>&nbsp;&nbsp;&nbsp;руб.</span></div>
								<div class="price"><? echo $config['car'][$list[$i]]['price']; ?><span>&nbsp;&nbsp;&nbsp;руб.</span></div>-->
								<div class="price red">От <? echo $config['car'][$list[$i]]['price']; ?><span>&nbsp;руб.</span></div>
								<div class="button red getleadspinoff" ident="<? echo str_replace(" ","&nbsp;",strip_tags($config['car'][$list[$i]]['name'])); ?>" pic="<? echo $config['car'][$list[$i]]['pic']; ?>" redprice="<? echo str_replace("&nbsp;руб.","",str_replace(" ","&nbsp;",strip_tags($config['car'][$list[$i]]['redprice']))); ?>" price="<? echo str_replace("&nbsp;руб.","",str_replace(" ","&nbsp;",strip_tags($config['car'][$list[$i]]['price']))); ?>" >Получить дополнительную выгоду</div>
								 <div class="button"  lpage="<? echo $config['car'][$list[$i]]['filter'] ?>">Автомобили в наличии</div> 
							</div>
						</div>
						<? } ?>
					</div>
				</div>
			</div>
		<?
	}
?>