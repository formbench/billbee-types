"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillbeeOrderState = void 0;
var BillbeeOrderState;
(function (BillbeeOrderState) {
    BillbeeOrderState[BillbeeOrderState["Bestellt"] = 1] = "Bestellt";
    BillbeeOrderState[BillbeeOrderState["Bestaetigt"] = 2] = "Bestaetigt";
    BillbeeOrderState[BillbeeOrderState["Zahlung_erhalten"] = 3] = "Zahlung_erhalten";
    BillbeeOrderState[BillbeeOrderState["Versendet"] = 4] = "Versendet";
    BillbeeOrderState[BillbeeOrderState["Reklamation"] = 5] = "Reklamation";
    BillbeeOrderState[BillbeeOrderState["Geloescht"] = 6] = "Geloescht";
    BillbeeOrderState[BillbeeOrderState["Abgeschlossen"] = 7] = "Abgeschlossen";
    BillbeeOrderState[BillbeeOrderState["Storniert"] = 8] = "Storniert";
    BillbeeOrderState[BillbeeOrderState["Archiviert"] = 9] = "Archiviert";
    BillbeeOrderState[BillbeeOrderState["Rated0"] = 10] = "Rated0";
    BillbeeOrderState[BillbeeOrderState["Mahnung"] = 11] = "Mahnung";
    BillbeeOrderState[BillbeeOrderState["Mahnung2"] = 12] = "Mahnung2";
    BillbeeOrderState[BillbeeOrderState["Gepackt"] = 13] = "Gepackt";
    BillbeeOrderState[BillbeeOrderState["Angeboten"] = 14] = "Angeboten";
    BillbeeOrderState[BillbeeOrderState["Zahlungserinnerung"] = 15] = "Zahlungserinnerung";
    BillbeeOrderState[BillbeeOrderState["Im_Fulfillment"] = 16] = "Im_Fulfillment";
})(BillbeeOrderState || (exports.BillbeeOrderState = BillbeeOrderState = {}));
//# sourceMappingURL=BillbeeOrder.js.map