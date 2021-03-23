# -*- coding: utf-8 -*-

import ctypes
import sys
import os
import json

class STRUCT_ITEMEFFECT(ctypes.Structure):
    _fields_ = [
        ('ceffect', ctypes.c_ubyte),
        ('cvalue', ctypes.c_ubyte)
    ]
    
class STRUCT_ITEM(ctypes.Structure):
    _fields_ = [
        ('sIndex', ctypes.c_short),
        ('steffect', STRUCT_ITEMEFFECT * 3)
    ]

class STRUCT_SCORE(ctypes.Structure):
    _fields_ = [
        ('Level', ctypes.c_short),
        ('Ac', ctypes.c_int),
        ('Damage', ctypes.c_int),
        ('Reserved', ctypes.c_ubyte),
        ('AttackRun', ctypes.c_ubyte),
        ('MaxHp', ctypes.c_int),
        ('MaxMp', ctypes.c_int),
        ('Hp', ctypes.c_int),
        ('Mp', ctypes.c_int),
        ('Str', ctypes.c_short),
        ('Int', ctypes.c_short),
        ('Dex', ctypes.c_short),
        ('Con', ctypes.c_short),
        ('Special', ctypes.c_ushort * 4),
    ]

class STRUCT_MOB(ctypes.Structure):
    _fields_ = [
        ('MobName', ctypes.c_char * 16),
        ('Clan', ctypes.c_char),
        ('Merchant', ctypes.c_ubyte),
        ('Guild', ctypes.c_ushort),
        ('_Class', ctypes.c_ubyte),
        ('Rsv', ctypes.c_ushort),
        ('Quest', ctypes.c_ubyte),
        ('Coin', ctypes.c_int),
        ('Exp', ctypes.c_longlong),
        ('HomeTownX', ctypes.c_short),
        ('HomeTownY', ctypes.c_short),
        ('BaseScore', STRUCT_SCORE),
        ('CurrentScore', STRUCT_SCORE),
        ('Equip', STRUCT_ITEM * 16),
        ('Carry', STRUCT_ITEM * 64),
        ('LearnedSkill', ctypes.c_uint * 2),
        ('ScoreBonus', ctypes.c_short),
        ('SpecialBonus', ctypes.c_short),
        ('SkillBonus', ctypes.c_short),
        ('Critical', ctypes.c_ubyte),
        ('SaveMana', ctypes.c_ubyte),
        ('ShortSkill', ctypes.c_char * 4),
        ('GuildLevel', ctypes.c_ubyte),
        ('Magic', ctypes.c_ubyte),
        ('RegenHP', ctypes.c_ubyte),
        ('RegenMP', ctypes.c_ubyte),
        ('Resist', ctypes.c_ubyte * 4),
        ('dummy', ctypes.c_char * 212),
        ('CurrentKill', ctypes.c_ushort),
        ('TotalKill', ctypes.c_ushort)
    ]
    
mob = sys.argv[1]

with open('./data/npc/' + mob, 'rb') as npc:
    
    mob = STRUCT_MOB()
    npc.readinto(mob)
    
    mobJson = {}
    
    mobJson['MobName'] = mob.MobName.decode()
    
    mobJson['Equip'] = {}
    mobJson['Carry'] = {}
    
    for i in range(0, 16):
        mobJson['Equip'][i] = {}
        mobJson['Equip'][i]['sIndex'] = mob.Equip[i].sIndex
        mobJson['Equip'][i]['code'] = str(mob.Equip[i].sIndex)
        for j in range(0, 3):
            mobJson['Equip'][i]['code'] = mobJson['Equip'][i]['code'] + ' ' + \
                str(mob.Equip[i].steffect[j].ceffect) + ' ' + \
                str(mob.Equip[i].steffect[j].cvalue)
    
    for i in range(0, 64):
        mobJson['Carry'][i] = {}
        mobJson['Carry'][i]['sIndex'] = mob.Carry[i].sIndex
        mobJson['Carry'][i]['code'] = str(mob.Carry[i].sIndex)
        for j in range(0, 3):
            mobJson['Carry'][i]['code'] = mobJson['Carry'][i]['code'] + ' ' + \
                str(mob.Carry[i].steffect[j].ceffect) + ' ' + \
                str(mob.Carry[i].steffect[j].cvalue)
        
    print(json.dumps(mobJson))
    
npc.close()