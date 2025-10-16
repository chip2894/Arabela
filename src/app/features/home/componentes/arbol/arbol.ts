import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ArbolService } from '../../../../core/Service/ArbolService/arbol.service';

@Component({
  selector: 'app-arbol',
  standalone: false,
  templateUrl: './arbol.html',
  styles: ``
})
export class Arbol implements OnInit {

  loading: boolean = true;

  files!: TreeNode[];

  constructor(private arbolService: ArbolService) { }

  ngOnInit() {
    this.arbolService.getFiles().then((data) => (this.files = data)).finally(() => this.loading = false);
  }

  expandAll() {
    this.files.forEach((node) => {
      this.expandRecursive(node, true);
    });
  }

  collapseAll() {
    this.files.forEach((node) => {
      this.expandRecursive(node, false);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach((childNode) => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }
}
