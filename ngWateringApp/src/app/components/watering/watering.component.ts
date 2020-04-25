import { Watering } from './../../models/watering';
import { WateringDataService } from './../../services/watering-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-watering',
  templateUrl: './watering.component.html',
  styleUrls: ['./watering.component.css']
})
export class WateringComponent implements OnInit {

  selected: Watering = null;

  newWatering: Watering = new Watering();

  waterings: Watering[] = [];

  editWatering: Watering = null;

  constructor(
        private wateringDataService: WateringDataService,
        private currentRoute: ActivatedRoute,
        private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.selected && this.currentRoute.snapshot.paramMap.get('id')) {
      this.wateringDataService.show(this.currentRoute.snapshot.paramMap.get('id')).subscribe(
        yay => {
              this.selected = yay;
        },
        nay => {
              this.router.navigateByUrl('notFound');
        }
      )
    }
    else{
      this.reload();
    }
  }

  displayWatering(watering: Watering){
    console.log(watering);
    this.router.navigateByUrl(`/waterings/${watering.id}`);
  }

  displayTable(){
    this.selected = null;
    this.router.navigateByUrl(`/waterings`);
  }

  reload(){
    this.wateringDataService.index().subscribe(
      data => {
        this.waterings = data;
        console.log(this.waterings);

      },
      bad => {
        console.error('Error in reload() ' + bad);
      }
    );
  }

  addWatering(watering: Watering){
    watering.userName = 'user';
    this.wateringDataService.create(watering).subscribe(
        good => {
          this.reload();
          this.newWatering = new Watering();
        },
        bad => {
          console.error("addTodo failed"+bad);
        }
    );
  }

  public destroy(id: number){
    this.wateringDataService.destroy(id).subscribe(
      yay => {
        this.reload();
      },
      nay => {
        console.error("Booo for destroy in components")
      }
    );
    this.reload();
  }

  setEditWatering(){
    this.editWatering = Object.assign({}, this.selected);
  }

  updateWatering(watering: Watering){
    // watering.userName = 'user';
    this.wateringDataService.update(watering).subscribe(
      yay => {
        this.reload();
        this.editWatering = null;
        this.selected = null;
      },
      nay => {
        console.error("updateTodo failed"+nay);
      }
    );
  };

}
