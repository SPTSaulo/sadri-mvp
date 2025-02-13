import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AwardService {
  private readonly firestore = inject(Firestore);
  private readonly COLLECTION_NAME = 'awards';

  getAll(): Observable<any[]> {
    const itemsCollection = collection(this.firestore, this.COLLECTION_NAME);
    return collectionData(itemsCollection, { idField: 'id' });
  }

  get(id: string): Observable<any> {
    const itemDocRef = doc(this.firestore, `${this.COLLECTION_NAME}/${id}`);
    return docData(itemDocRef, { idField: 'id' }) as Observable<any>;
  }

  add(item: any) {
    const itemsRef = collection(this.firestore, this.COLLECTION_NAME);
    return setDoc(doc(itemsRef), item);
  }

  update(item: any) {
    const itemDocRef = doc(this.firestore, this.COLLECTION_NAME, item.id);
    return updateDoc(itemDocRef, item);
  }

  delete(id: string) {
    const itemDocRef = doc(this.firestore, `${this.COLLECTION_NAME}/${id}`);
    return deleteDoc(itemDocRef);
  }
}
