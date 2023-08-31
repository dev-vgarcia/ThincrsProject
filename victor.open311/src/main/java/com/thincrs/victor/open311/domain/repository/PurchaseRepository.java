package com.thincrs.victor.open311.domain.repository;

import com.thincrs.victor.open311.domain.Purchase ;

import java.util.List;
import java.util.Optional;

public interface PurchaseRepository {
    List<Purchase> getAll();
    Optional<List<Purchase>> getByClient(String clientId);
    Purchase save(Purchase purchase);
}
