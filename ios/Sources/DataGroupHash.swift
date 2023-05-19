//
//  DataGroupHash.swift
//  nfcios
//
//  Created by Güneş İLİKSİZ on 19.05.2023.
//

import Foundation
//
//  DataGroupHash.swift
//  NFCPassportReader
//
//  Created by Andy Qua on 09/02/2021.
//  Copyright © 2021 Andy Qua. All rights reserved.
//

@available(iOS 13, macOS 10.15, *)
public struct DataGroupHash {
    public var id: String
    public var sodHash: String
    public var computedHash : String
    public var match : Bool
}

