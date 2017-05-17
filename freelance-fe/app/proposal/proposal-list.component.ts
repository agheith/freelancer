import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component ({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html',
    styleUrls: ['proposal-list.component.css']
})

export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(1, 'Amer Company', 'http://amergheith.me', 'Ruby on Rails', 150, 120, 15, 'amerghth@gmail.com')
    proposalTwo: Proposal = new Proposal(2, 'Hana Company', 'http://amergheith.me', 'Ruby on Rails', 150, 120, 15, 'amerghth@gmail.com')
    proposalThree: Proposal = new Proposal(3, 'Maya Company', 'http://amergheith.me', 'Ruby on Rails', 150, 120, 15, 'amerghth@gmail.com')

    proposals: Proposal[] = [
        this.proposalOne,
        this.proposalTwo,
        this.proposalThree
    ]
}
