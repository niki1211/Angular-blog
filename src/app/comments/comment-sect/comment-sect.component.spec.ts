import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSectComponent } from './comment-sect.component';

describe('CommentSectComponent', () => {
  let component: CommentSectComponent;
  let fixture: ComponentFixture<CommentSectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentSectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentSectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
