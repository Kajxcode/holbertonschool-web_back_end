#!/usr/bin/env python3
"""the module defines a function"""
from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """inserts new document in collection"""
    insert = mongo_collection.insert(kwargs)
    return insert.inserted_id
