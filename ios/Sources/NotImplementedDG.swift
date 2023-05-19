//
//  NotImplementedDG.swift
//  nfcios
//
//  Created by Güneş İLİKSİZ on 19.05.2023.
//

import Foundation

@available(iOS 13, macOS 10.15, *)
public class NotImplementedDG : DataGroup {
    required init( _ data : [UInt8] ) throws {
        try super.init(data)
        datagroupType = .Unknown
    }
}

