import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DbserviceProvider } from '../dbservice/dbservice';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ConstantProvider } from '../constant/constant';
import { AlertController, LoadingController, Loading, Events } from 'ionic-angular';
import { Observable, Subject } from 'rxjs';

/*
Generated class for the OfflineDbProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class OfflineDbProvider {
      
      loading: Loading;
      isLoadingInprocess: any = false;
      updatedModuleCount: any = 0;
      localDBCallingCount = 0;
      localDBTblUpdatedCount = 0;
      
      constructor(public http: HttpClient,
            public service:DbserviceProvider,
            private sqlite: SQLite,
            public fileTransfer: FileTransfer,
            public file: File,
            public loadingCtrl: LoadingController,
            private constant:ConstantProvider,
            private alertCtrl: AlertController,
            public events:Events) {
                  
                  
                  console.log('Hello OfflineDbProvider Provider');
            }
            
            public onReturnLocalDBHandler(): Observable<any> 
            {      
                  const requestData = new Subject< any >();
                  
                  this.sqlite.create({
                        name: 'toyZoneDataStore31.db',
                        location: 'default'
                  }).then((db: SQLiteObject) => {
                        
                        requestData.next(db);
                  })
                  
                  return requestData.asObservable();
            }
            
            public onValidateLocalDBSetUpTypeHandler() 
            {
                  console.log('check here 1');
                  
                  this.onReturnLocalDBHandler().subscribe((db) => {
                        
                        console.log('check here 2');

                        db.executeSql('SELECT name FROM sqlite_master WHERE type= "table" AND name = "local_db_last_updated"', []).then(sqliteFetchResult => {
                              
                              console.log(sqliteFetchResult);
                              console.log('check here 3');
                              
                              let isLocalDBFirstSetUp = false;
                              let isSetUpCompleted = false;
                              let userLocalDBSetUpMsg = '';
                              
                              if(sqliteFetchResult.rows.length > 0) {
                                    
                                    const item = sqliteFetchResult.rows.item(0);
                                    console.log(sqliteFetchResult.rows.item(0));
                                    console.log(item);
                                    console.log('check item');
                                    
                                    if(item.initial_setup_done == 0) {
                                          
                                          db.executeSql('DROP TABLE IF EXISTS local_db_last_updated').then(result => {
                                                
                                                console.log('Drop result 1 '+ result);
                                          });
                                          
                                          db.executeSql('DROP TABLE IF EXISTS master_category').then(result => {
                                                console.log('Drop result 2 '+ result);
                                                
                                          });

                                          db.executeSql('DROP TABLE IF EXISTS master_product_images').then(result => {
                                                console.log('Drop result 2 '+ result);
                                                
                                          });

                                          db.executeSql('DROP TABLE IF EXISTS master_product').then(result => {
                                                console.log('Drop result 2 '+ result);
                                                
                                          });

                                          db.executeSql('DROP TABLE IF EXISTS master_category_images').then(result => {
                                                console.log('Drop result 2 '+ result);
                                                
                                          });

                                          
                                          
                                          userLocalDBSetUpMsg = 'Account SetUp Interrupted Earlier, It will take little time!';
                                          
                                    } else {
                                          
                                          isSetUpCompleted = true;
                                    }
                                    
                              } else {
                                    
                                    isLocalDBFirstSetUp = true;
                                    userLocalDBSetUpMsg = 'Account SetUp Required for Catalogue offline Access, It will take little time!';
                              }
                              
                              if(isSetUpCompleted === true) {
                                    
                                    this.onInitializeLocalDBUpdationHandler(db, false);
                                    
                              } else {
                                    
                                    let alert = this.alertCtrl.create({
                                          title: 'Confirmation',
                                          message: userLocalDBSetUpMsg,
                                          buttons: [
                                                {
                                                      text: 'Ok',
                                                      handler: () => {
                                                            
                                                            setTimeout(() => {
                                                                  
                                                                  this.onInitializeLocalDBUpdationHandler(db, true);
                                                                  
                                                            }, 1000);
                                                            
                                                      }
                                                }
                                          ]
                                    });
                                    
                                    alert.present();
                              }
                        });
                  })
            }
            
            public onInitializeLocalDBUpdationHandler(db, showLoading) {
                  
                  if(showLoading === true) {
                        
                        this.loading = this.loadingCtrl.create({
                              spinner: 'hide',
                              content: 'Please Wait <img src="./assets/imgs/gif.svg" class="h55" /',
                        });
                        
                        this.loading.present();
                        
                        this.isLoadingInprocess = true;
                  }
                  
                  this.onUpdateLocalDBLastUpdatedTimeHandler(db, false, '').subscribe((localDBLastUpdatedTime) => {
                        
                        console.log(localDBLastUpdatedTime);
                        this.onCreateLocalDBAllTablesHandler(db);
                        this.onUpdateCategoryIntoLocalDBHandler(db, localDBLastUpdatedTime);
                        this.onUpdateLocalDBProductHandler(db, localDBLastUpdatedTime);
                  });
            }
            
            public onUpdateCategoryIntoLocalDBHandler(db, localDBLastUpdatedTime) {
                  
                  const filterData = {};
                  filterData['lastUpdatedTime'] = localDBLastUpdatedTime;
                  
                  this.service.post_rqst({'filter' : filterData},'MasterOfflineController/parentCategory_List').subscribe((serverResult) => {
                        
                        console.log('Category List');
                        console.log(serverResult);
                        this.onCompareCategoryLocalDBWithServerDataHandler(db, serverResult);
                        this.onCompareCategoryImagesLocalDBWithServerDataHandler(db, serverResult);
                        
                  },(error: any) => {
                        
                        console.log(error);
                  });
            }
            
            public onUpdateLocalDBProductHandler(db, currentUpdatedTime) {
                  
                  const filterData = {};
                  filterData['lastUpdatedTime'] = currentUpdatedTime;
                  
                  this.service.post_rqst({'filter' : filterData},'MasterOfflineController/onGetProductListHandler').subscribe((serverResult) => {
                        
                        console.log('Product List');
                        console.log(serverResult);
                        
                        this.onCompareLocalDBProductDataWithServerDataHandler(db, serverResult);
                        this.onCompareLocalDBProductImageWithServerDataHandler(db, serverResult);
                        
                  },(error: any) => {
                        
                        console.log(error);
                  });
            }
            
            public onCompareCategoryLocalDBWithServerDataHandler(db, serverResult) {
                  
                  let locaDBRowsAffactedCount = 0;
                  
                  if(serverResult.categories.length == 0) {
                        
                        this.onInitializeLocalDBUpdateFinishingProcessHandler(db, serverResult);
                        
                  } else {
                        
                        serverResult.categories.forEach(serverResultRow => {
                              
                              db.executeSql('SELECT * FROM master_category WHERE id = ?', [serverResultRow.id]).then(sqliteFetchResult => {
                                    
                                    console.log(sqliteFetchResult);
                                    
                                    if(sqliteFetchResult.rows.length > 0) {
                                          
                                          db.executeSql('UPDATE master_category SET date_created=?, main_category=?, category_name=?,image=?,status=?,last_updated=?,del=? WHERE id=?', [
                                                
                                                serverResultRow.date_created,
                                                serverResultRow.main_category,
                                                serverResultRow.category_name,
                                                serverResultRow.actual_image_name,
                                                serverResultRow.status,
                                                serverResultRow.last_updated,
                                                serverResultRow.del,
                                                serverResultRow.id
                                          ]);
                                          
                                    } else {
                                          
                                          db.executeSql('INSERT INTO master_category VALUES(?,?,?,?,?,?,?,?)',[
                                                
                                                serverResultRow.date_created,
                                                serverResultRow.id,
                                                serverResultRow.main_category,
                                                serverResultRow.category_name,
                                                serverResultRow.actual_image_name,
                                                serverResultRow.status,
                                                serverResultRow.last_updated,
                                                serverResultRow.del
                                          ]);
                                    }
                                    
                                    locaDBRowsAffactedCount++;
                                    
                                    console.log('serverResult.categories ' + serverResult.categories.length);
                                    console.log('locaDBRowsAffactedCount ' + locaDBRowsAffactedCount);
                                    
                                    if(serverResultRow.is_image_exist_app_package == 0) {
                                          
                                          this.onDownloadImageFileForLocalDBHandler('mainCategoryImage', serverResultRow.actual_image_name,serverResult.lastUpdatedTime,db);
                                    }
                                    
                                    if(serverResult.categories.length == locaDBRowsAffactedCount) {
                                          this.onInitializeLocalDBUpdateFinishingProcessHandler(db, serverResult);
                                    }
                                    
                              });
                        });
                  }
            }
            
            public onCompareCategoryImagesLocalDBWithServerDataHandler(db, serverResult) {
                  
                  let locaDBRowsAffactedCount = 0;
                  
                  if(serverResult.masterCategoryImageList.length == 0) {
                        
                        this.onInitializeLocalDBUpdateFinishingProcessHandler(db, serverResult);
                        
                  } else {
                        
                        serverResult.masterCategoryImageList.forEach(serverResultRow => {
                              
                              db.executeSql('SELECT * FROM master_category_images WHERE id = ?', [serverResultRow.id]).then(sqliteFetchResult => {
                                    
                                    console.log(sqliteFetchResult);
                                    
                                    if(sqliteFetchResult.rows.length > 0) {
                                          
                                          db.executeSql('UPDATE master_category_images SET date_created=?, category_id=?, image=?,last_updated=?,profile=?,del=? WHERE id=?', [
                                                
                                                serverResultRow.date_created,
                                                serverResultRow.category_id,
                                                serverResultRow.actual_image_name,
                                                serverResultRow.last_updated,
                                                serverResultRow.profile,
                                                serverResultRow.del,
                                                serverResultRow.id
                                          ]);
                                          
                                    } else {
                                          
                                          db.executeSql('INSERT INTO master_category_images VALUES(?,?,?,?,?,?,?)',[
                                                
                                                serverResultRow.id,
                                                serverResultRow.date_created,
                                                serverResultRow.category_id,
                                                serverResultRow.actual_image_name,
                                                serverResultRow.last_updated,
                                                serverResultRow.profile,
                                                serverResultRow.del
                                          ]);
                                    }
                                    
                                    locaDBRowsAffactedCount++;
                                    
                                    console.log('serverResult.categories ' + serverResult.masterCategoryImageList.length);
                                    console.log('locaDBRowsAffactedCount ' + locaDBRowsAffactedCount);
                                    
                                    if(serverResultRow.is_image_exist_app_package == 0) {
                                          
                                          this.onDownloadImageFileForLocalDBHandler('categoryImage', serverResultRow.actual_image_name,serverResult.lastUpdatedTime,db);
                                    }
                                    
                                    if(serverResult.masterCategoryImageList.length == locaDBRowsAffactedCount) {
                                          this.onInitializeLocalDBUpdateFinishingProcessHandler(db, serverResult);
                                    }
                                    
                              });
                        });
                  }
            }
            
            public onCompareLocalDBProductDataWithServerDataHandler(db, serverResult) {
                  
                  let locaDBRowsAffactedCount = 0;
                  
                  if(serverResult.productList.length == 0) {
                        
                        this.onInitializeLocalDBUpdateFinishingProcessHandler(db, serverResult);
                        
                  } else {
                        
                        
                        serverResult.productList.forEach(serverResultRow => {
                              
                              db.executeSql('SELECT * FROM master_product WHERE id = ?', [serverResultRow.id]).then(sqliteFetchResult => {
                                    
                                    console.log(sqliteFetchResult);
                                    
                                    if(sqliteFetchResult.rows.length > 0) {
                                          
                                          db.executeSql('UPDATE master_product SET date_created=?, master_category_id=?,brand=?,product_name=?,material_code=?,pcs_set=?,desc=?,video_link=?,price=?,std_packing=?,cartoon_packing=?,cn_net_price=?,dd_net_price=?,master_packing=?,pcs=?,status=?,deactive_date=?,reason=?,deactive_by=?,latest=?,hsn=?,new_arrival=?,last_updated=?,del=? WHERE id=?', [
                                                
                                                serverResultRow.date_created,
                                                serverResultRow.master_category_id,
                                                serverResultRow.brand,
                                                serverResultRow.product_name,
                                                serverResultRow.material_code,
                                                serverResultRow.pcs_set,
                                                serverResultRow.desc,
                                                serverResultRow.video_link,
                                                serverResultRow.price,
                                                serverResultRow.std_packing,
                                                serverResultRow.cartoon_packing,
                                                serverResultRow.cn_net_price,
                                                serverResultRow.dd_net_price,
                                                serverResultRow.master_packing,
                                                serverResultRow.pcs,
                                                serverResultRow.status,
                                                serverResultRow.deactive_date,
                                                serverResultRow.reason,
                                                serverResultRow.deactive_by,
                                                serverResultRow.latest,
                                                serverResultRow.hsn,
                                                serverResultRow.new_arrival,
                                                serverResultRow.last_updated,
                                                serverResultRow.del,
                                                serverResultRow.id
                                          ]);
                                          
                                    } else {
                                          
                                          db.executeSql('INSERT INTO master_product VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                                                
                                                serverResultRow.id,
                                                serverResultRow.date_created,
                                                serverResultRow.master_category_id,
                                                serverResultRow.brand,
                                                serverResultRow.product_name,
                                                serverResultRow.material_code,
                                                serverResultRow.pcs_set,
                                                serverResultRow.desc,
                                                serverResultRow.video_link,
                                                serverResultRow.price,
                                                serverResultRow.std_packing,
                                                serverResultRow.cartoon_packing,
                                                serverResultRow.cn_net_price,
                                                serverResultRow.dd_net_price,
                                                serverResultRow.master_packing,
                                                serverResultRow.pcs,
                                                serverResultRow.status,
                                                serverResultRow.deactive_date,
                                                serverResultRow.reason,
                                                serverResultRow.deactive_by,
                                                serverResultRow.latest,
                                                serverResultRow.hsn,
                                                serverResultRow.new_arrival,
                                                serverResultRow.last_updated,
                                                serverResultRow.del
                                          ]);
                                    }
                                    
                                    locaDBRowsAffactedCount++;
                                    
                                    console.log('serverResult.categories ' + serverResult.productList.length);
                                    
                                    if(serverResult.productList.length == locaDBRowsAffactedCount) {
                                          this.onInitializeLocalDBUpdateFinishingProcessHandler(db, serverResult);
                                    }
                                    
                              });
                        });
                        
                  }
            }
            totalImages:any=0
            downloadedImages:any=0
            public onCompareLocalDBProductImageWithServerDataHandler(db, serverResult) {
                  
                  let locaDBRowsAffactedCount = 0;
                  
                  if(serverResult.productImageList.length == 0) {
                        
                        this.onInitializeLocalDBUpdateFinishingProcessHandler(db, serverResult);
                        
                  } else {
                        this.totalImages = serverResult.productImageListCount;
                        serverResult.productImageList.forEach(serverResultRow => {
                              
                              db.executeSql('SELECT * FROM master_product_images WHERE id = ?', [serverResultRow.id]).then(sqliteFetchResult => {
                                    
                                    console.log(sqliteFetchResult);
                                    
                                    if(sqliteFetchResult.rows.length > 0) {
                                          
                                          db.executeSql('UPDATE master_product_images SET date_created=?, product_id=?, image=?,profile=?,last_updated=?,del=? WHERE id=?', [
                                                
                                                serverResultRow.date_created,
                                                serverResultRow.product_id,
                                                serverResultRow.actual_image_name,
                                                serverResultRow.profile,
                                                serverResultRow.last_updated,
                                                serverResultRow.del,
                                                serverResultRow.id
                                          ]);
                                          
                                    } else {
                                          
                                          db.executeSql('INSERT INTO master_product_images VALUES(?,?,?,?,?,?,?)',[
                                                
                                                serverResultRow.id,
                                                serverResultRow.date_created,
                                                serverResultRow.product_id,
                                                serverResultRow.actual_image_name,
                                                serverResultRow.profile,
                                                serverResultRow.last_updated,
                                                serverResultRow.del
                                          ]);
                                    }
                                    
                                    locaDBRowsAffactedCount++;
                                    
                                    console.log('serverResult.categories ' + serverResult.productImageList.length);
                                    console.log('locaDBRowsAffactedCount ' + locaDBRowsAffactedCount);
                                    
                                    if(serverResultRow.is_image_exist_app_package == 0) {
                                          
                                          this.onDownloadImageFileForLocalDBHandler('productImage', serverResultRow.actual_image_name,serverResult.lastUpdatedTime,db);
                                          // this.totalImages++
                                    }
                                    
                                    if(serverResult.productImageList.length == locaDBRowsAffactedCount) {
                                          this.onInitializeLocalDBUpdateFinishingProcessHandler(db, serverResult);
                                    }
                              });
                        });
                        
                  }
            }
            
            public onInitializeLocalDBUpdateFinishingProcessHandler(db, serverResult) {
                  
                  this.localDBTblUpdatedCount++;
                  
                  console.log('serverResult.lastUpdatedTime' + serverResult.lastUpdatedTime);
                  
                  if(this.localDBTblUpdatedCount == 4) {
                        this.onUpdateLocalDBLastUpdatedTimeHandler(db, true, serverResult.lastUpdatedTime);
                  }
            }
            
            public onUpdateLocalDBLastUpdatedTimeHandler(db, isLocalDBUpdated, currentUpdatedTime) : Observable<any> {
                  
                  const requestData = new Subject< any >();
                  
                  let localDBLastUpdatedTime = '';
                  
                  db.executeSql('CREATE TABLE IF NOT EXISTS local_db_last_updated(initial_setup_done INT, last_updated TEXT)', {});
                  
                  db.executeSql('SELECT * FROM local_db_last_updated', []).then(sqliteFetchResult => {
                        
                        if(sqliteFetchResult.rows.length === 0) {
                              
                              if(isLocalDBUpdated === true) {
                                    
                                    // db.executeSql('UPDATE local_db_last_updated SET initial_setup_done = ?,last_updated=?', [1, currentUpdatedTime]);
                                    
                                    localDBLastUpdatedTime = currentUpdatedTime;
                                    
                              } else {
                                    
                                    db.executeSql('INSERT INTO local_db_last_updated VALUES(?, ?)',[0, currentUpdatedTime]);
                                    
                                    localDBLastUpdatedTime = currentUpdatedTime;
                              }
                              
                        } else {
                              
                              if(isLocalDBUpdated === true) {
                                    
                                    // db.executeSql('UPDATE local_db_last_updated SET initial_setup_done=?,last_updated=?',[1, currentUpdatedTime]);
                                    
                                    localDBLastUpdatedTime = currentUpdatedTime;
                                    
                              } else {
                                    
                                    localDBLastUpdatedTime = sqliteFetchResult.rows.item(0).last_updated;
                              }
                        }
                        
                        if(isLocalDBUpdated === true && this.isLoadingInprocess === true) {
                              console.log('db Setup complete')
                              // this.onLocalDBSetUpCompleteHandler(db);
                        }
                        
                        console.log('db');
                        console.log(db);
                        
                        db.executeSql('SELECT * FROM local_db_last_updated', []).then(sqliteFetchResult => {
                              
                              console.log('local_db_last_updated');
                              console.log(sqliteFetchResult);
                        });
                        
                        
                        db.executeSql('SELECT * FROM master_category', []).then(sqliteFetchResult1 => {
                              console.log('master_category');
                              console.log(sqliteFetchResult1);
                        });
                        
                        
                        db.executeSql('SELECT * FROM master_category_images', []).then(sqliteFetchResult3 => {
                              
                              console.log('master_category_images');
                              console.log(sqliteFetchResult3);
                              
                        });
                        
                        
                        db.executeSql('SELECT * FROM master_product', []).then(sqliteFetchResult4 => {
                              
                              console.log('master_product');
                              console.log(sqliteFetchResult4);
                              
                              
                        });
                        
                        
                        db.executeSql('SELECT * FROM master_product_images ', []).then(sqliteFetchResult5 => {
                              
                              console.log('master_product_images');
                              console.log(sqliteFetchResult5);
                        });
                        
                        requestData.next(localDBLastUpdatedTime);
                  });
                  
                  return requestData.asObservable();
            }
            
            public onLocalDBSetUpCompleteHandler(db) {
                  
                  this.loading.dismiss();
                  this.isLoadingInprocess = false;
                  
                  let alert = this.alertCtrl.create({
                        title: 'Succes',
                        message: 'Account Set Up Completed',
                        buttons: [
                              {
                                    text: 'Ok',
                                    handler: () => {
                                          
                                          this.events.publish('getCountProducts', true);
                                          
                                          console.log('Success');
                                    }
                              }
                        ]
                  });
                  
                  alert.present();
            }
            
            
            public onDownloadImageFileForLocalDBHandler(type, imageName,lastUpdatedTime,db) {
                  
                  let imageSourceDirectory, downloadDestinationDirectory = '';
                  if(type == 'mainCategoryImage') {
                        
                        imageSourceDirectory = 'app/Http/Controllers/Admin/Master/appOfflineUploads/mainCategoryImage/';
                        
                        downloadDestinationDirectory = 'download/mainCategoryImage/';
                        
                  } else if(type == 'categoryImage') {
                        
                        imageSourceDirectory = 'app/Http/Controllers/Admin/Master/appOfflineUploads/categoryImage/';
                        
                        downloadDestinationDirectory = 'download/categoryImage/';
                        
                  } else if(type == 'productImage') {
                        
                        imageSourceDirectory = 'app/Http/Controllers/Admin/Master/appOfflineUploads/productImage/';
                        
                        downloadDestinationDirectory = 'download/productImage/';
                  }
                  
                  const fileTransfer: FileTransferObject = this.fileTransfer.create();
                  
                  console.log(this.file.dataDirectory);
                  
                  var url = this.constant.rootUrl + imageSourceDirectory + imageName;
                  
                  fileTransfer.download(url, this.file.dataDirectory + downloadDestinationDirectory + imageName).then((entry) => {
                        console.log('download complete: ' + entry.toURL());
                        
                        if(type == 'productImage')
                        {
                              this.downloadedImages++
                        }
                        
                        if(this.totalImages==this.downloadedImages)
                        {
                              db.executeSql('UPDATE local_db_last_updated SET initial_setup_done=?,last_updated=?',[1, lastUpdatedTime]);
                              
                              this.onLocalDBSetUpCompleteHandler(db);
                        }
                        
                  },er=>
                  {
                        if(type == 'productImage')
                        {
                              this.downloadedImages++
                        }
                        console.log('download error');
                        
                        if(this.totalImages==this.downloadedImages)
                        {
                              db.executeSql('UPDATE local_db_last_updated SET initial_setup_done=?,last_updated=?',[1, lastUpdatedTime]);

                              this.onLocalDBSetUpCompleteHandler(db);
                        }
                  })
            }
            
            
            public onReturnImagePathHandler(type, imageName, recordId) : Observable<any> {
                  
                  const requestData = new Subject< any >();
                  
                  const resultData = Array();
                  let imagePath = '';
                  
                  
                  const imagePathArr = [];
                  if(type == 'mainCategoryImage') {
                        
                        const downloadDestinationDirectory = 'download/mainCategoryImage/';
                        imagePathArr[0] = this.file.dataDirectory + downloadDestinationDirectory + imageName;
                        
                        imagePathArr[1] = 'file:///android_asset/www/assets/uploads/mainCategoryImage/' + imageName;
                        
                  } else if(type == 'categoryImage') {
                        
                        const downloadDestinationDirectory = 'download/categoryImage/';
                        imagePathArr[0] = this.file.dataDirectory + downloadDestinationDirectory + imageName;
                        
                        imagePathArr[1] = 'file:///android_asset/www/assets/uploads/categoryImage/' + imageName;
                        
                  } else  if(type == 'productImage') {
                        
                        const downloadDestinationDirectory = 'download/productImage/';
                        imagePathArr[0] = this.file.dataDirectory + downloadDestinationDirectory + imageName;
                        
                        imagePathArr[1] = 'file:///android_asset/www/assets/uploads/productImage/' +  imageName;
                  }
                  
                  let imageCheckCount = 0;
                  for (let index = 0; index < imagePathArr.length; index++) {
                        
                        let path: string = imagePathArr[index];
                        let filepath = path.substring(0, path.lastIndexOf('/') + 1);
                        let filename = path.substring(path.lastIndexOf('/') + 1, path.length);
                        
                        this.file.checkFile(filepath, filename).then((files) => {
                              
                              console.log('index '+ index + 'files found ' + files);
                              
                              imageCheckCount++;
                              
                              if(!imagePath) {
                                    imagePath = filepath + filename;
                              }
                              
                              if(imageCheckCount == imagePathArr.length) {
                                    
                                    if(!imagePath) {
                                          
                                          imagePath = 'assets/imgs/no-thumbnail.jpg';
                                          console.log(imageName, imagePath);
                                    }
                                    
                                    resultData['imagePath'] = imagePath;
                                    resultData['recordId'] = recordId;
                                    
                                    requestData.next(resultData);
                              }
                              
                              
                        }).catch((err) => {
                              
                              console.log('index '+ index + 'files not found ');
                              imageCheckCount++;
                              
                              if(imageCheckCount == imagePathArr.length) {
                                    
                                    if(!imagePath) {
                                          imagePath = 'assets/imgs/no-thumbnail.jpg';
                                          console.log(imageName, imagePath);
                                    }
                                    
                                    resultData['imagePath'] = imagePath;
                                    resultData['recordId'] = recordId;
                                    
                                    requestData.next(resultData);
                              }
                              
                        });
                  }
                  
                  return requestData.asObservable();
            }
            
            
            public onGetCategoryRowsHandler(db, mainCategoryName) : Observable<any> {
                  
                  const requestData = new Subject< any >();
                  
                  db.executeSql('SELECT * FROM master_category WHERE main_category = ? AND status = ? AND del = ?', [mainCategoryName, 'Active', 0]).then(sqliteFetchResult => {
                        
                        console.log(sqliteFetchResult);
                        requestData.next(sqliteFetchResult);
                  });
                  
                  return requestData.asObservable();
            }
            
            
            public onGetCategoryListHandler(searchData) : Observable<any> {
                  
                  const requestData = new Subject< any >();
                  
                  this.onReturnLocalDBHandler().subscribe(db => {
                        
                        let whereBindStr = '';
                        let whereBindArrValue = ['Active', searchData.name, 'Active', 0];
                        
                        if( searchData && searchData.status) {
                              
                              whereBindStr += ' AND master_category.status LIKE ?';
                              whereBindArrValue.push(searchData.status);
                        }
                        
                        if( searchData && searchData.date) {
                              
                              whereBindStr += ' AND master_category.date_created LIKE ?';
                              whereBindArrValue.push(searchData.date_created);
                        }
                        
                        if( searchData && searchData.category_name) {
                              
                              whereBindStr += ' AND master_category.category_name LIKE ?';
                              whereBindArrValue.push(searchData.category_name);
                        }
                        
                        if( searchData && searchData.name) {
                              
                              whereBindStr += ' AND master_category.main_category LIKE ?';
                              whereBindArrValue.push(searchData.name);
                        }
                        
                        console.log(whereBindStr);
                        console.log('where clause ' + whereBindArrValue);
                        
                        db.executeSql('SELECT master_category.* FROM master_category JOIN master_product ON master_product.master_category_id = master_category.id AND master_product.status = ? WHERE master_category.main_category = ? AND master_category.status = ? AND master_category.del = ? '+whereBindStr+' GROUP BY master_category.id ORDER BY master_category.id ASC', whereBindArrValue).then(sqliteFetchResult => {
                              
                              console.log(sqliteFetchResult);
                              
                              let imageAddedForCategory = 0;
                              
                              const categoryData = Array();
                              for (let index = 0; index < sqliteFetchResult.rows.length; index++) {
                                    
                                    const categoryRow = sqliteFetchResult.rows.item(index);
                                    categoryRow.image = '';
                                    
                                    console.log(categoryRow);
                                    categoryData.push(categoryRow);
                                    
                                    db.executeSql('SELECT master_category_images.*  FROM master_category_images WHERE master_category_images.category_id = ? AND master_category_images.del = ?', [categoryRow.id, 0]).then(sqliteFetchResult2 => {
                                          console.log(sqliteFetchResult2);
                                          
                                          const imageData = Array();
                                          if(sqliteFetchResult2.rows.length > 0) {
                                                
                                                let categoryId;
                                                for (let index1 = 0; index1 < sqliteFetchResult2.rows.length; index1++) {
                                                      
                                                      
                                                      const imageRow = sqliteFetchResult2.rows.item(index1);
                                                      categoryId = imageRow.category_id;
                                                      imageData.push(imageRow);
                                                }
                                                
                                                console.log('CtaeogryId ' + categoryId);
                                                console.log(imageData);
                                                
                                                const categoryIndex = categoryData.findIndex(categoryRow => categoryRow.id == categoryId);
                                                
                                                if(categoryIndex !== -1) {
                                                      categoryData[categoryIndex].image = imageData;
                                                }
                                          }
                                          
                                          imageAddedForCategory++;
                                          
                                          if(imageAddedForCategory == categoryData.length) {
                                                
                                                requestData.next(categoryData);
                                          }
                                    });
                              }
                        });
                        
                  });
                  
                  return requestData.asObservable();
            }
            
            
            public onGetProductSearchArrHandler(searchData, isNewArrival) {
                  
                  let whereBindStr = '';
                  let whereBindArrValue = ['Active', 0];
                  
                  if(isNewArrival == 1) {
                        
                        whereBindStr += ' AND master_product.new_arrival = ?';
                        whereBindArrValue.push(isNewArrival);
                  }
                  
                  if(searchData && searchData.id) {
                        
                        whereBindStr += ' AND master_product.master_category_id = ?';
                        whereBindArrValue.push(searchData.id);
                  }
                  
                  if( searchData && searchData.status) {
                        
                        whereBindStr += ' AND master_product.status = ?';
                        whereBindArrValue.push(searchData.status);
                  }
                  
                  if( searchData && searchData.date) {
                        
                        whereBindStr += ' AND master_product.date_created LIKE ?';
                        whereBindArrValue.push(searchData.date_created);
                  }
                  
                  if( searchData && searchData.product_name) {
                        
                        whereBindStr += ' AND master_product.product_name LIKE ?';
                        whereBindArrValue.push(searchData.product_name);
                  }
                  
                  if( searchData && searchData.search) {
                        
                        whereBindStr += ' AND master_product.product_name LIKE ?';
                        whereBindArrValue.push(searchData.search);
                        
                  }
                  
                  const resultData = {};
                  resultData['whereBindStr'] = whereBindStr;
                  resultData['whereBindArrValue'] = whereBindArrValue;
                  
                  return resultData;
            }
            
            globleSearchCount:any=0
            public onGetProductListHandler(searchData, isNewArrival): Observable<any> {
                  
                  const requestData = new Subject< any >();
                  // var globleSearchCount = 0
                  
                  const resultData = {};
                  let resultDataCount = 0;
                  this.onReturnLocalDBHandler().subscribe(db => {
                        
                        db.executeSql('SELECT master_category.*, master_category_images.image as categoryImage FROM master_category LEFT JOIN master_category_images ON master_category_images.category_id = master_category.id WHERE master_category.status = ? AND master_category.id = ?', ['Active',  searchData.id]).then(sqliteFetchResult => {
                              
                              console.log(sqliteFetchResult);
                              
                              const categoryData = Array();
                              for (let index = 0; index < sqliteFetchResult.rows.length; index++) {
                                    
                                    const categoryRow = sqliteFetchResult.rows.item(index);
                                    categoryData.push(categoryRow);
                              }
                              
                              resultData['category_name'] = categoryData;
                              
                              resultDataCount++;
                              
                              if(resultDataCount == 4) {
                                    requestData.next(resultData);
                              }
                        });
                        
                        console.log(searchData);
                        
                        const searchResultData = this.onGetProductSearchArrHandler(searchData, isNewArrival);
                        let whereBindStr1 = searchResultData['whereBindStr'];
                        const whereBindArrValue1 = searchResultData['whereBindArrValue'];
                        
                        if(isNewArrival == 1) {
                              whereBindStr1  += ' AND master_product_images.profile = ?';
                              whereBindArrValue1.push(1);
                        }
                        
                        console.log(searchData);
                        console.log(whereBindStr1, whereBindArrValue1);
                        console.log('check Here');
                        
                        console.log('SELECT master_product.*, master_category.main_category, master_category.category_name, master_product_images.image FROM master_product LEFT JOIN master_category ON master_category.id = master_product.master_category_id LEFT JOIN master_product_images ON master_product_images.product_id = master_product.id AND master_product_images.del = 0 WHERE master_product.status = ? AND master_product.del = ? '+whereBindStr1+' GROUP BY master_product.id ORDER BY master_product.id ASC', whereBindArrValue1);
                        
                        db.executeSql('SELECT master_product.*, master_category.main_category, master_category.category_name, master_product_images.image FROM master_product LEFT JOIN master_category ON master_category.id = master_product.master_category_id LEFT JOIN master_product_images ON master_product_images.product_id = master_product.id AND master_product_images.del = 0 WHERE master_product.status = ? AND master_product.del = ? '+whereBindStr1+' GROUP BY master_product.id ORDER BY master_product.id ASC', whereBindArrValue1).then(sqliteFetchResult => {
                              
                              console.log(sqliteFetchResult);
                              
                              const productData = Array();
                              this.globleSearchCount=0
                              for (let index = 0; index < sqliteFetchResult.rows.length; index++) {
                                    
                                    const productRow = sqliteFetchResult.rows.item(index);
                                    
                                    if (searchData && searchData.globalSearchData) {
                                          
                                          if(searchData.src == 'mainCategory') {
                                                
                                                console.log(productRow);
                                                if (
                                                      (productRow.main_category && (productRow.main_category).toLowerCase().includes(searchData.globalSearchData.toLowerCase()))
                                                      
                                                      || (productRow.category_name && (productRow.category_name).toLowerCase().includes(searchData.globalSearchData.toLowerCase()))
                                                      
                                                      || (productRow.product_name && (productRow.product_name).toLowerCase().includes(searchData.globalSearchData.toLowerCase()))) {
                                                            if(productData && productData.length < 100 )
                                                            {
                                                                  // alert('loop breaked')
                                                                  productData.push(productRow);
                                                            }
                                                            this.globleSearchCount ++ 
                                                            console.log(productData);
                                                      }
                                                      
                                                } else if(searchData.src == 'category') {
                                                      
                                                      console.log('check Here src is category')
                                                      
                                                      if ((productRow.main_category && (productRow.main_category).toLowerCase().includes(searchData.categoryName.toLowerCase() ))
                                                      && ( (productRow.category_name && (productRow.category_name).toLowerCase().includes(searchData.globalSearchData.toLowerCase()))
                                                      || (productRow.product_name && (productRow.product_name).toLowerCase().includes(searchData.globalSearchData.toLowerCase())))) {
                                                            if(productData && productData.length < 100 )
                                                            {
                                                                  console.log('check Here 2')
                                                                  productData.push(productRow);
                                                                  this.globleSearchCount ++ 
                                                                  
                                                            }
                                                            
                                                      }
                                                }
                                          } else {
                                                
                                                productData.push(productRow);
                                                
                                          }
                                          console.log(this.globleSearchCount);
                                          
                                          
                                    }
                                    
                                    resultData['products'] = productData;
                                    if(searchData && searchData.globalSearchData)
                                    {
                                          resultData['product_count_all'] = this.globleSearchCount;
                                    }
                                    console.log(resultData,'check here')
                                    resultDataCount++;
                                    
                                    if(resultDataCount == 4) {
                                          requestData.next(resultData);
                                    }
                              }, err => {
                                    
                                    console.log('hello1');
                                    console.log(err);
                              });
                              
                              const whereBindStr2 = searchResultData['whereBindStr'];
                              const whereBindArrValue2 = searchResultData['whereBindArrValue'];
                              
                              db.executeSql('SELECT master_product.* FROM master_product WHERE master_product.status = ? AND master_product.master_category_id = ? AND master_product.del = ? '+whereBindStr2+' GROUP BY master_product.master_category_id ORDER BY master_product.master_category_id ASC', whereBindArrValue2).then(sqliteFetchResult => {
                                    
                                    console.log(sqliteFetchResult);
                                    resultData['product_count'] = sqliteFetchResult.rows.length;
                                    resultDataCount++;
                                    
                                    if(resultDataCount == 4) {
                                          requestData.next(resultData);
                                    }
                              });
                              
                              
                              db.executeSql('SELECT master_product.* FROM master_product WHERE master_product.master_category_id = ? AND master_product.del = ?', [searchData.id, 0]).then(sqliteFetchResult => {
                                    
                                    console.log(sqliteFetchResult);
                                    if(searchData && !searchData.globalSearchData)
                                    {
                                          
                                          resultData['product_count_all'] = sqliteFetchResult.rows.length;
                                    }
                                    
                                    resultDataCount++;
                                    
                                    if(resultDataCount == 4) {
                                          requestData.next(resultData);
                                    }
                              });
                              
                        });
                        console.log(resultData,'check here')
                        return requestData.asObservable();
                  }
                  
                  
                  public onGetProductDetailHandler(productId): Observable<any> {
                        
                        const requestData = new Subject< any >();
                        this.onReturnLocalDBHandler().subscribe(db => {
                              
                              db.executeSql('SELECT master_product.*, master_category.main_category, master_category.category_name FROM master_product LEFT JOIN master_category ON master_category.id = master_product.master_category_id WHERE master_product.id = ?', [productId]).then(sqliteFetchResult => {
                                    
                                    console.log(sqliteFetchResult);
                                    const productData = sqliteFetchResult.rows.item(0);
                                    
                                    db.executeSql('SELECT master_product_images.* FROM master_product_images  WHERE master_product_images.product_id = ? AND master_product_images.del = ?  LIMIT 1', [productId,0]).then(sqliteFetchResult2 => {
                                          
                                          console.log(sqliteFetchResult2);
                                          
                                          const imageData = Array();
                                          for (let index = 0; index < sqliteFetchResult2.rows.length; index++) {
                                                const imageRow = sqliteFetchResult2.rows.item(index);
                                                imageData.push(imageRow);
                                          }
                                          
                                          console.log(imageData);
                                          
                                          productData.image = imageData;
                                          
                                          db.executeSql('SELECT master_product_images.* FROM master_product_images  WHERE master_product_images.product_id = ? AND master_product_images.profile = ? AND master_product_images.del = ? LIMIT 1', [productId, 1,0]).then(sqliteFetchResult3 => {
                                                
                                                console.log(sqliteFetchResult3);
                                                
                                                const imageProfileData = Array();
                                                
                                                for (let index1 = 0; index1 < sqliteFetchResult3.rows.length; index1++) {
                                                      
                                                      const imageProfileRow = sqliteFetchResult3.rows.item(index1);
                                                      imageProfileData.push(imageProfileRow);
                                                }
                                                
                                                console.log(imageProfileData);
                                                
                                                productData.image_profile = imageProfileData;
                                                requestData.next(productData);
                                          })
                                    })
                              })
                        });
                        
                        return requestData.asObservable();
                  }
                  
                  
                  public onGetMainCategoryListHandler(searchData): Observable<any> {
                        
                        const requestData = new Subject< any >();
                        this.onReturnLocalDBHandler().subscribe(db => {
                              
                              let whereStr = '';
                              const whereArrValue = ['Active', 'Active', 0];
                              if(searchData && searchData.name) {
                                    
                                    whereStr = ' AND master_category.main_category LIKE ?';
                                    whereArrValue.push(searchData.name);
                              }
                              
                              console.log('SELECT master_category.* FROM master_category JOIN master_product ON master_product.master_category_id = master_category.id WHERE master_product.status = ? AND master_category.status = ? AND master_category.del = ? ' + whereStr + ' GROUP BY master_category.main_category ORDER BY master_category.id');
                              
                              db.executeSql('SELECT master_category.* FROM master_category JOIN master_product ON master_product.master_category_id = master_category.id WHERE master_product.status = ? AND master_category.status = ? AND master_category.del = ? ' + whereStr + ' GROUP BY master_category.main_category ORDER BY master_category.id', whereArrValue).then(sqliteFetchResult => {
                                    
                                    console.log(sqliteFetchResult);
                                    requestData.next(sqliteFetchResult);
                              })
                        });
                        
                        return requestData.asObservable();
                  }
                  
                  public onReturnActiveProductCountHandler(): Observable<any> {
                        
                        const requestData = new Subject< any >();
                        this.onReturnLocalDBHandler().subscribe(db => {
                              
                              db.executeSql('SELECT master_product.id FROM master_product JOIN master_category ON master_category.id = master_product.master_category_id WHERE master_category.status = ? AND master_category.del = ? AND master_product.status = ? AND master_product.del = ?', ['Active', 0, 'Active', 0]).then(sqliteFetchResult => {
                                    
                                    console.log(sqliteFetchResult);
                                    
                                    const productCount = sqliteFetchResult.rows.length;
                                    requestData.next(productCount);
                              });
                        })
                        
                        return requestData.asObservable();
                  }
                  
                  public onReturnActiveProductNewArrivalsCountHandler(): Observable<any> {
                        
                        const requestData = new Subject< any >();
                        this.onReturnLocalDBHandler().subscribe(db => {
                              
                              db.executeSql('SELECT master_product.id FROM master_product JOIN master_category ON master_category.id = master_product.master_category_id WHERE master_category.status = ? AND master_category.del = ? AND master_product.new_arrival = ? AND master_product.status = ? AND master_product.del = ?', ['Active', 0,1, 'Active', 0]).then(sqliteFetchResult => {
                                    
                                    console.log(sqliteFetchResult);
                                    
                                    const productCount = sqliteFetchResult.rows.length;
                                    requestData.next(productCount);
                              });
                        })
                        
                        return requestData.asObservable();
                  }
                  
                  
                  public onCreateLocalDBAllTablesHandler(db) {
                        
                        db.executeSql('CREATE TABLE IF NOT EXISTS master_category(date_created Text,id INT, main_category TEXT, category_name TEXT, image TEXT, status TEXT, last_updated TEXT, del INT)', {});
                        
                        db.executeSql('CREATE INDEX IF NOT EXISTS category_id ON master_category (id)',{});
                        
                        db.executeSql('CREATE TABLE IF NOT EXISTS master_category_images(id INT, date_created Text,category_id INT, image TEXT, last_updated TEXT, profile INT, del INT)', {});
                        
                        db.executeSql('CREATE TABLE IF NOT EXISTS master_product(id INT, date_created Text,master_category_id INT, brand TEXT, product_name TEXT, material_code TEXT, pcs_set TEXT, desc TEXT,video_link TEXT, price TEXT, std_packing TEXT, cartoon_packing TEXT, cn_net_price TEXT, dd_net_price TEXT, master_packing TEXT, pcs TEXT, status TEXT, deactive_date TEXT, reason TEXT, deactive_by INT, latest INT, hsn TEXT, new_arrival INT, last_updated TEXT, del INT)', {});
                        
                        db.executeSql('CREATE TABLE IF NOT EXISTS master_product_images(id INT,date_created Text,product_id INT, image TEXT, profile INT, last_updated TEXT, del INT)', {});
                  }
            }
            