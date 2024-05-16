import { Component, Input } from '@angular/core';
import { Developer } from '../models/developer.model';
import { SkillComponent } from '../skill/skill.component';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})
export class DeveloperComponent {

  java: Skill = new Skill("Java", "logo java", "site Java")
  angular: Skill = new Skill("angular", "logo angular", "site angular")
  html: Skill = new Skill("html", "logo java", "site Java")

  tabSkill: Skill[] = [this.java, this.angular, this.html,];

  @Input()
  developer01: Developer = new Developer("Dupont", "Jean-Pierre", 40, "m", "Mas biography", this.tabSkill);
}
