import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { DiceRoll } from '../shared/dice-roll';
import { DiceSimulation } from '../shared/dice-simulation';
import { RelativeDistribution } from '../shared/relative-distribution';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.css']
})
export class DiceRollComponent implements OnInit {

  diceSides: number[] = [4, 6, 8, 10, 12, 20, 100];
  displayedExecColumns: string[] = ['rollSum', 'rollSumCount'];
  displayedSimColumns: string[] = ['numOfSimulations', 'totalRolls'];
  displayedRelativeDistributionColumns: string[] = ['relativeDistribution', 'rollSum', 'rollSumCount'];

  minDice: number = 1;
  maxDice: number = 100;
  diceSideValue: number = 4;
  numOfDiceValue: number = 1;
  numOfRolls: number = 1;

  tableExecutionResult: DiceRoll[];
  tableSimulationResult: DiceSimulation[];
  tableDistributionResult: RelativeDistribution[];

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 1;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  vertical = false;
  tickInterval = 1;

  constructor(private restApi: RestApiService) { }

  ngOnInit(): void {
  }

  getSliderTickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this.tickInterval) : 0;
  }

  onSubmit() {
    this.restApi.rollDice(this.numOfDiceValue, this.diceSideValue, this.numOfRolls)
      .subscribe((data: DiceRoll[]) => {
        if (data) {
          this.tableExecutionResult = data;
          console.log(data);
        }
        else {
          alert('No DiceRoll data found');
        }
      });

    this.restApi.getRollDiceSimulation(this.numOfDiceValue, this.diceSideValue)
      .subscribe((data: DiceSimulation) => {
        if (data) {
          this.tableSimulationResult = [];
          this.tableSimulationResult.push(data);
        }
        else {
          alert('No DiceSimulation data found');
        }
      });

    this.restApi.getRelativeDistribution(this.numOfDiceValue, this.diceSideValue)
      .subscribe((data: RelativeDistribution[]) => {
        if (data) {
          this.tableDistributionResult = data;
        }
        else {
          alert('No RelativeDistribution data found');
        }
      });
  }


}
