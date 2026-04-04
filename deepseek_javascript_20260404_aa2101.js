const admin = require('firebase-admin');
admin.initializeApp();

await admin.auth().setCustomUserClaims(uid, {
  role: 'manager',        // 'super_admin', 'manager', 'vendeur'
  storeId: 'ID_DU_MAGASIN'
});