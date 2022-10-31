import { TestBed } from '@angular/core/testing';

import { BlogServerService } from './blog-server.service';

describe('BlogServerService', () => {
  let service: BlogServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
