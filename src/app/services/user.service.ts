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
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly firestore = inject(Firestore);
  private readonly COLLECTION_NAME = 'users';

  public currentUser = new BehaviorSubject<any>(null);

  getAll(): Observable<any[]> {
    const itemsCollection = collection(this.firestore, this.COLLECTION_NAME);
    return collectionData(itemsCollection, { idField: 'id' });
  }

  get(id: string): Observable<any> {
    const itemDocRef = doc(this.firestore, `${this.COLLECTION_NAME}/${id}`);
    return docData(itemDocRef, { idField: 'id' }) as Observable<any>;
  }

  update(item: any) {
    const itemDocRef = doc(this.firestore, this.COLLECTION_NAME, item.id);
    return updateDoc(itemDocRef, item);
  }
}
