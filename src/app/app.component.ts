import { Component, HostListener } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web';



getRouteAnimationData() {
  return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
}
  public open(modal: any): void {
  this.modalService.open(modal);
  }
 
  constructor(private modalService: NgbModal, private contexts: ChildrenOutletContexts,private router: Router ) {
  }
  showScrollToTop: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.showScrollToTop = true;
    } else {
      this.showScrollToTop = false;
    }
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  }
